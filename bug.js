```javascript
// Incorrect usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
  } else {
    // User is signed out
    // ...
  }
});
```