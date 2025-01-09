```javascript
// Correct usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    try {
      // User is signed in, fetch user data
      const snapshot = await db.collection('users').doc(user.uid).get();
      if(snapshot.exists){
        const userData = snapshot.data();
        // ...
      } else {
        console.error('User data not found');
      }
    } catch(error){
      console.error('Error fetching user data', error);
    }
  } else {
    // User is signed out
    // ...
  }
});
```