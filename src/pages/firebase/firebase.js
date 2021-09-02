import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// import firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.db = app.firestore()
  }

  //Auth API

  //SignIn/Login User
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  //Logout
  doSignOut = () => this.auth.signOut()

  //Password Reset/Forget Password
  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email)

  //Password Update
  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password)

  //Verify forgetPassword code
  doVerifyPasswordResetcode = (code) => this.auth.verifyPasswordResetCode(code)

  //Set new forgetPassword Password
  doChangePasswordWithcode = (code, password) =>
    this.auth.confirmPasswordReset(code, password)

  getCurrentUserUid = () => {
    return this.auth.currentUser
  }
}

export default Firebase
// firebase.analytics()
