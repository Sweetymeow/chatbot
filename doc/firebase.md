# Portfolio Chatbot

[Demo](https://chatlolw.firebaseapp.com/index_bk.html)

## Deploy with Firebase hosting
### 1. [Get start with firebase on Web](https://firebase.google.com/docs/web/setup?utm_source=welcome&utm_medium=email&utm_campaign=welcome_B)
You create a new user in your Firebase project by calling the [createUserWithEmailAndPassword](https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account) method or by signing in a user for the first time using a federated identity provider, such as Google Sign-In or Facebook Login.

### 2. [Manage Users in Firebase](https://firebase.google.com/docs/auth/web/manage-users)
- Get the currently signed-in user
```
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
```

- Get a user's profile:
To get a user's profile information, use the properties of an instance of User

- Get a user's provider-specific profile information
To get the profile information retrieved from the sign-in providers linked to a user, use the providerData property.

- Update a user's profile
You can update a user's basic profile information—the user's display name and profile photo URL—with the updateProfile method.

```javascript
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  
  // The user's ID, unique to the Firebase project. Do NOT use this value to authenticate with your backend server, if you have one. Use User.getToken() instead.

  // Get a user's provider-specific profile information
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

// Update User's Profile
user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});

```

### 3. [Firebase Hosting](https://firebase.google.com/docs/hosting/)

```
# Login
$ firebase login

# Init the site
$ firebase init

# Deploy your site -> <YOUR-FIREBASE-APP>.firebaseapp.com.
$ firebase deploy

```

[Customize Hosting Behavior](https://firebase.google.com/docs/hosting/url-redirects-rewrites)

### 4. [Firebase Realtime database](https://firebase.google.com/docs/database/)
#### [Database - Web](https://firebase.google.com/docs/database/web/start)
