import { GoogleAuthProvider,signInWithPopup,signOut ,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "./firebase"
export function LogInWithGoogle(){
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
export function LogOut(){
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
export function LogIn(leerlingnummer,password){
signInWithEmailAndPassword(auth, `${leerlingnummer}@pierson.nl`, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}
export function SignIn(leerlingnummer,password,herhaalpassword,naam){
    if(password === herhaalpassword){
        createUserWithEmailAndPassword(auth,leerlingnummer + "@pierson.nl",password)
        .then((userCredential) => {
            // Signed in 
            let user = userCredential.user;
            
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
}