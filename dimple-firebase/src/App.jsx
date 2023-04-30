import { useState } from 'react'
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


const handleGoogleLogin = () => {
  signInWithPopup(auth, googleProvider)
    .then(result => {
      const loggedUser = result.user 
      console.log(loggedUser)
      
    })
    .catch(error => {
    console.log('Opps Thats A Error' ,error)
  })


}
function App() {

  return (
    <>
      
       
      <h1>Firebase + React</h1>
     <button onClick={handleGoogleLogin}>Google</button>
     
      
    </>
  )
}

export default App
