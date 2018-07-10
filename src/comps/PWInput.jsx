import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon, Input, Confirm, Form, Button, TextArea, Message, Transition } from 'semantic-ui-react';
import '../styles/Chatbox.css';
import firebase from '../firebase';
// import signinError from '../res/signinError';

class PWInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "basic",
      inputRef: null,
      defaultEmail: "default@gmail.com",
      password: "",
      openAlert: false,
      alertContent: "",
      userEmail: "",
      userMessage: "",
      showEmailAlert: false,
      isFormVisible: false,
      fbDatabase: null
    };
    this.handleRef = this.handleRef.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  closeAlert() {
    this.setState({
      openAlert: false
    });
  }

  handleInputChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  showForm() {
    this.setState({
      isFormVisible: true
    })
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
      .catch(error => { // Handle Errors here.
        this.setState({
          openAlert: true,
          alertContent: error.message
        });
      });
  }

  render() {
    const { label, enableBack } = this.props;
    const { password, alertContent, openAlert, showEmailAlert, userEmail, userMessage, isFormVisible } = this.state;
    return (
      <section className="input-container bub-60wid-center">
        <Grid className="input-header">
          <Grid.Row centered columns={3}>
            <Grid.Column width={3} />
            <Grid.Column className="back-button" width={3}>
              {enableBack ? (<a href="http://localhost:3000/"><Icon name="arrow left" /> BACK</a>)
                : null}
            </Grid.Column>
            <Grid.Column width={10}>
                <p className="input-label">{label}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <form className="input-action">
            {/* <Input className="input-field" icon={{ name: 'arrow right', circular: true, link: true}}
             type="password" ref={this.handleRef} size="big" focus placeholder="Password..."
             value={password} onChange={this.handlePWChange} /> */}
           <Input icon className="input-field" ref={this.handleRef} size="big" focus placeholder="Password...">
             <input type="password" onChange={this.handlePWChange} value={password} />
             <Icon circular color="teal" name="arrow right" link onClick={this.handleSubmit} />
           </Input>
           <p className="input-email-link" onClick={this.showForm} role="button">
             Request the Password
             {/* <Button onClick={this.showForm} content='Request the Password' basic /> */}
           </p>
        </form>
        <Confirm content={alertContent} open={openAlert} onCancel={this.closeAlert} onConfirm={this.closeAlert} />
        {/* <!----------   Form to get password by send email  ----------> */}
        <Transition visible={isFormVisible} animation="fade" duration={500}>
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
