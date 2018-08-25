import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Confirm, Form, Button, TextArea, Message, Transition } from 'semantic-ui-react';
import { toggInputVisible, updateScrollTop, fetchPostEmail } from '../redux/actions';
import { DELAY_TIMER, HOMEPAGE_LINK } from '../redux/constants';
// import { success } from '../res/imgBundle';
import '../styles/Chatbox.css';
import firebase from '../firebase';

const emailSuccessId = 13;

class PWInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultEmail: "default@gmail.com",
      password: "",
      openAlert: false,
      alertContent: "",
      userEmail: "",
      userMessage: "",
      showEmailAlert: false,
      isPWSuccess: false, // true,
      innerBox: document.getElementById("chatbox-inner"),
      // pwAnimeDuration: 500,
      isFormVisible: false,
      fbDatabase: null
    };
    this.handleRef = this.handleRef.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
    this.createFirebaseAccount = this.createFirebaseAccount.bind(this);
    this.loginFirebaseAccount = this.loginFirebaseAccount.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
    /* ---Function for Email Request(Form)--- */
    this.showForm = this.showForm.bind(this);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEmailRequestSubmit = this.handleEmailRequestSubmit.bind(this);
  }

  componentDidMount() {
    const { delayTimer, getInputVisible } = this.props;
    // get Reference to the database service
    // const defaultDatabase = firebase.database();

    setTimeout(() => {
      console.log("!!! Update Input Visible to TRUE");
      getInputVisible(true);
    }, delayTimer);

    this.setState({
      fbDatabase: firebase.database(),
      inputRef: null
    });

    const userId = firebase.auth().currentUser ? firebase.auth().currentUser.uid : "";
    // console.log(firebase.auth().currentUser);
    firebase.database().ref(`/allBubbles`)
      .once('value').then(snapshot => {
        console.log("Firebase database:", snapshot.val());
        console.log("Userid: ", userId);
      });
  }

  handleRef(c) {
    this.setState({
      inputRef: c
    })
  }

  handlePWChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit() {
    this.loginFirebaseAccount();
    this.props.getInputVisible(false);
    this.setState({
      isPWSuccess: true
    });

    setTimeout(() => {
      const eleRect = document.getElementById("scrollToThis");
      // const innerBox = document.getElementById("chatbox-inner");
      const { innerBox } = this.state;
      const { getScrollTopHeight } = this.props;
      getScrollTopHeight(eleRect.getBoundingClientRect().top - innerBox.getBoundingClientRect().top);
    }, 1);
  }

  handleEnterPress(event) {
    // event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === "Enter") {
      console.log(`ENTER PRESS - PW: ${this.state.password}`);
      event.preventDefault();
      // Trigger the button element with a click
      this.loginFirebaseAccount();
    }
  }

  closeAlert() {
    this.setState({
      openAlert: false
    });
  }

  handleInputChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  showForm(e) {
    e.preventDefault();
    const { getInputVisible } = this.props;

    getInputVisible(false);

    setTimeout(() => {
      this.setState({
        isFormVisible: true
      });
      this.scrollToForm();
    }, DELAY_TIMER);
  }

  scrollToForm() {
    setTimeout(() => {
      const eleRect = document.getElementById("scrollToForm").getBoundingClientRect();
      const { innerBox } = this.state;
      const { getScrollTopHeight } = this.props;

      const newScrollTop = eleRect.top - innerBox.getBoundingClientRect().top - 400;
      // console.log(`inner Top ${innerBox.getBoundingClientRect().top} // NEW - ${newScrollTop}`);
      getScrollTopHeight(newScrollTop);
    }, 100);
  }

  handleEmailRequestSubmit() {
    const { userMessage, userEmail } = this.state;

    if (userEmail.indexOf("@") < 0 || userEmail.indexOf(".com") < 0) {
      console.log("EMAIL FORMAT ERROR");
      this.setState({
        showEmailAlert: true
      });
    } else {
      const userId = firebase.auth().currentUser.uid || "test12345";
      const date = new Date();
      firebase.database().ref(`users/${userId}-${date.toString()}`).set({
        userId,
        email: userEmail,
        context: userMessage
      });
      // this.postEmailReqeust();
      this.props.postEmailMessage({
        email: userEmail,
        content: userMessage
      })
      this.props.onBtnClick(emailSuccessId); // nextID, bubInfo
    }
  }

  // async postEmailReqeust() {
  //   const result = await fetchPostEmail();
  //   return result.then(data => console.log(data));
  // }

  handleAlertDismiss() {
    this.setState({
      userEmail: "",
      showEmailAlert: false
    });
  }

  createFirebaseAccount() {
    const { defaultEmail, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(defaultEmail, password)
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", errorCode, errorMessage);
        // ...
      });
  }

  loginFirebaseAccount() {
    const { onBtnClick, nextStepId } = this.props;
    firebase.auth()
      .signInWithEmailAndPassword(this.state.defaultEmail, this.state.password)
      .then( msg => {
        console.log("Success Log in - ", msg);
        window.open(HOMEPAGE_LINK, '_blank');
        // onBtnClick(nextStepId);
      })
      .catch(error => { // Handle Errors here.
        this.setState({
          openAlert: true,
          alertContent: error.message
        });
      });
  }

  render() {
    const { label, enableBack, inputVisible } = this.props;
    const { password, alertContent, openAlert, showEmailAlert, userEmail, userMessage, isFormVisible, isPWSuccess } = this.state;
    return (
      <section className="input-container bub-60wid-center">
        <div className={inputVisible ? "input-pw-container" : "input-pw-container hidden"}>
          <Form className="input-pw-form">
            <Form.Group className="input-header">
              {enableBack ? (<a className="back-button" href="http://localhost:3000/"><Icon name="arrow left" /> BACK</a>)
                : null}
              <p className="input-label">{label}</p>
            </Form.Group>
            <Form.Input icon className="input-password" ref={this.handleRef} size="big" focus placeholder="Password..." >
               <input type="password" value={password}
                  onChange={this.handlePWChange} onKeyPress={this.handleEnterPress} />
               {/*<input type="password" onChange={this.handlePWChange} value={password} onKeyPress={this.handleEnterPress} />*/}
               <Icon circular color="teal" name="arrow right" link onClick={this.handleSubmit} />
            </Form.Input>
            <Button className="input-email-link borderless-btn" onClick={this.showForm} content="Request the Password" />
          </Form>
        </div>
        <Transition animation="fade" visible={isPWSuccess}>
          <div className="input-success-message" id="scrollToThis">
            <p>Password Passed!</p>
          </div>
        </Transition>
        {/*<Transition className="input-pw-container" animation="fade down" duration={pwAnimeDuration} id={inputVisible ? "" : "hidden"}
          onShow={console.log("!! SHOW")} onHide={
            console.log("@@ HIDE", "// Input visible ? ", inputVisible)
          }></Transition>*/}
        <Confirm content={alertContent} open={openAlert} onCancel={this.closeAlert} onConfirm={this.closeAlert} />
        {/*<!----------   Form to get password by send email  ----------> */}
        <Transition visible={isFormVisible} animation="slide up" duration={500}>
          <Form className="input-request-form" onSubmit={this.handleEmailRequestSubmit} id="scrollToForm">
            <Form.Input className="form-input" id="form-email" label="Email Address" placeholder="Your email address"
              name="userEmail"
              value={userEmail} error={showEmailAlert}
              onChange={this.handleInputChange}
              onKeyPress={this.handleEnterPress} />
            <Message error header="Wrong Email Format"
              visible={showEmailAlert}
              onDismiss={this.handleAlertDismiss} content="Provide valid e-mail address to get reply." />
            <Form.Field className="form-input" id="form-message"
              control={TextArea}
              name="userMessage"
              value={userMessage}
              onChange={this.handleInputChange}
              onKeyPress={this.handleEnterPress}
              label="Email Content" placeholder="You need to mention at least your full name, company, and your purpose here. Thank you! :)" />
            <Button type="submit">Submit Password Request</Button>
          </Form>
        </Transition>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  inputVisible: state.inputVisible
});

const mapDispatchToProps = (dispatch) => ({
  getInputVisible: (isVisible) => dispatch(toggInputVisible(isVisible)),
  getScrollTopHeight: (height) => {
    dispatch(updateScrollTop(height));
  },
  postEmailMessage: (data) => {
    dispatch(fetchPostEmail(data));
  }
});

PWInput.propTypes = {
  inputVisible: PropTypes.bool,
  enableBack: PropTypes.bool,
  label: PropTypes.string,
  delayTimer: PropTypes.number,
  nextStepId: PropTypes.number,
  onBtnClick: PropTypes.func,
  getInputVisible: PropTypes.func,
  postEmailMessage: PropTypes.func,
  getScrollTopHeight: PropTypes.func
};

// export default PWInput;
export default connect(mapStateToProps, mapDispatchToProps)(PWInput);
