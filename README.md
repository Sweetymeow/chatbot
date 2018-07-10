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

***

# Tech Stack
## [React](https://reactjs.org/docs/getting-started.html)
- [Intro to Firebase and React](https://css-tricks.com/intro-firebase-react/)

## [Redux](https://redux.js.org/)
- [Redux vs. Mobx, 谁更适合管理大规模应用的前端状态？](https://www.jianshu.com/p/5d743203744d)
- [Redux 中文文档](https://cn.redux.js.org/)

## [Semantic UI React](https://react.semantic-ui.com/introduction)

## [JavaScript 标准参考教程（alpha）](http://javascript.ruanyifeng.com/) & [ES6](http://es6.ruanyifeng.com/?search=%60&x=0&y=0)

## [SCSS Color](https://robots.thoughtbot.com/controlling-color-with-sass-color-functions)
