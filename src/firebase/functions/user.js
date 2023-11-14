import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

// Initialize Firebase Auth and Database
const auth = getAuth();
const db = getDatabase();

function signUp(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password, name)
    .then((userCredential) => {
      // The user has been created and signed in 
      const user = userCredential.user;

      // Add the new user to your Realtime Database
      set(ref(db, 'user/' + user.uid), {
        email: user.email,
        uid: user.uid,
        name: name,
        acessLevel: 0,
      }).then(() => {
        console.log('User added to the database');
      }).catch((error) => {
        console.error('Error adding user to the database:', error);
      });

    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });

    function logIn(email, password) {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // The user is signed in 
            const user = userCredential.user;
            console.log('User is signed in');
          })
          .catch((error) => {
            console.error('Error signing in:', error);
          });
      }
}



// AUTHENTICATION EXAMPLE
// import { getAuth } from "firebase/auth";

// const auth = getAuth();
// const user = auth.currentUser;

// if (user) {
//   // User is signed in, you can use the user object for authenticated operations.
//   console.log(user.email);
// } else {
//   // No user is signed in.
//   console.log('No user is signed in');
// }

//=============================EXAMPLE===============================

// The code to check the authentication state should be placed in the part of your application where you need to know the authentication state. This could be in a component that requires the user to be authenticated, or in your application's main file to check the auth state when the app loads.

// Here's an example of how you can use it in a React component:

// ```javascript
// import React, { useEffect, useState } from 'react';
// import { getAuth } from "firebase/auth";

// function UserProfile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const auth = getAuth();
//     if (auth.currentUser) {
//       setUser(auth.currentUser);
//     } else {
//       // Redirect to login
//     }
//   }, []);

//   if (!user) {
//     return null;
//   }

//   return (
//     <div>
//       <h1>Welcome, {user.email}</h1>
//       {/* Rest of your component */}
//     </div>
//   );
// }

// export default UserProfile;
// ```

// In this example, the `UserProfile` component checks if a user is logged in when the component is mounted. If a user is logged in, it sets the user state with the current user's information. If no user is logged in, you can redirect the user to a login page.

// Remember to replace `'Welcome, {user.email}'` and `'Rest of your component'` with the actual content of your component. Also, don't forget to handle exceptions and errors appropriately for a better user experience.

// I hope this helps! Let me know if you have any other questions. 😊