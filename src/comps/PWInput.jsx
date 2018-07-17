import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Confirm, Form, Button, TextArea, Message, Transition } from 'semantic-ui-react';
import '../styles/Chatbox.css';
import firebase from '../firebase';
// import signinError from '../res/signinError';

class PWInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputRef: null,
      defaultEmail: "default@gmail.com",
      password: "",
      openAlert: false,
      alertContent: "",
      userEmail: "",
      userMessage: "",
      showEmailAlert: false,
      isPWinputVisible: true,
      pwAnimeDuration: 500,
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
    // get Reference to the database service
    // const defaultDatabase = firebase.database();
    this.setState({
      fbDatabase: firebase.database()
    })
    // const user = firebase.auth().currentUser;
  }

  handleRef(c) {
    this.state.inputRef = c;
  }

  handlePWChange(event) {
    // console.log(event.target.value);
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit() {
    console.log(`PW: ${this.state.password}`);
    // const itemsRef = firebase.database().ref('items');
    this.loginFirebaseAccount();
  }

  handleEnterPress() {
    console.log(`ENTER PRESS - PW: ${this.state.password}`);
    // const itemsRef = firebase.database().ref('items');
    this.loginFirebaseAccount();
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
    this.setState({
      isPWinputVisible: false
    });
    setTimeout(() => {
      this.setState({
        isFormVisible: true
      });
    }, this.state.pwAnimeDuration);
  }

  handleEmailRequestSubmit() {
    if (this.state.userEmail.indexOf("@") < 0 || this.state.userEmail.indexOf(".com") < 0) {
      console.log("EMAIL FORMAT ERROR");
      this.setState({
        showEmailAlert: true
      })
    }
    console.log("Email Request Submit:", this.state.userEmail, this.state.userMessage);
  }

  handleAlertDismiss() {
    this.setState({
      userEmail: "",
      showEmailAlert: false
    });
  }

  createFirebaseAccount() {
    firebase.auth().createUserWithEmailAndPassword(this.state.defaultEmail, this.state.password)
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", errorCode, errorMessage);
        // ...
      });
  }

  loginFirebaseAccount() {
    firebase.auth()
      .signInWithEmailAndPassword(this.state.defaultEmail, this.state.password)
      .then( msg => {
        console.log(msg);
        // window.open('https://www.google.com', '_blank');
      })
      .catch(error => { // Handle Errors here.
        this.setState({
          openAlert: true,
          alertContent: error.message
        });
      });
  }

  render() {
    const { label, enableBack } = this.props;
    const { password, alertContent, openAlert, showEmailAlert, userEmail, userMessage, isFormVisible, isPWinputVisible, pwAnimeDuration } = this.state;
    return (
      <section className="input-container bub-60wid-center">
        <Transition className="input-pw-container" animation="swing up" duration={pwAnimeDuration} visible={isPWinputVisible}>
          <Form className="input-pw-form">
            <Form.Group className="input-header">
              {enableBack ? (<a className="back-button" href="http://localhost:3000/"><Icon name="arrow left" /> BACK</a>)
                : null}
              <p className="input-label">{label}</p>
            </Form.Group>
            <Form.Input icon className="input-password" ref={this.handleRef} size="big" focus placeholder="Password...">
               <input type="password" onChange={this.handlePWChange} value={password} />
               <Icon circular color="teal" name="arrow right" link onClick={this.handleSubmit} onKeyPress={this.handleEnterPress} />
            </Form.Input>
            <Button className="input-email-link borderless-btn" onClick={this.showForm} content="Request the Password" />
          </Form>
        </Transition>
        <Confirm content={alertContent} open={openAlert} onCancel={this.closeAlert} onConfirm={this.closeAlert} />
        {/*<!----------   Form to get password by send email  ----------> */}
        <Transition visible={isFormVisible} animation="slide up" duration={500}>
          <Form className="input-request-form" onSubmit={this.handleEmailRequestSubmit} >
            <Form.Input className="form-input" id="form-email" label="Email Address" placeholder="Your email address" error={showEmailAlert} name="userEmail" value={userEmail} onChange={this.handleInputChange} />
            <Message error header="Wrong Email Format" visible={showEmailAlert}
              onDismiss={this.handleAlertDismiss} content="Provide valid e-mail address to get reply." />
            <Form.Field className="form-input" id="form-message" control={TextArea}
              name="userMessage" value={userMessage} onChange={this.handleInputChange}
              label="Email Content" placeholder="You need to mention at least your full name, company, and your purpose here. Thank you! :)" />
            <Button>Submit Password Request</Button>
          </Form>
        </Transition>
      </section>
    );
  }
}


PWInput.propTypes = {
  enableBack: PropTypes.bool,
  label: PropTypes.string
};

export default PWInput;
