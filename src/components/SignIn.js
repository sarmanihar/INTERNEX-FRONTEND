import React from 'react'
import "../css/signin.css";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import CreateUser from "../services/createUser"
import CreatePosts from "../services/createPosts"

const firebaseConfig = {
    apiKey: process.env.FIREBASE_apiKey,
    authDomain: process.env.FIREBASE_authDomain,
    projectId: process.env.FIREBASE_projectId,
    storageBucket: process.env.FIREBASE_storageBucket,
    messagingSenderId: process.env.FIREBASE_messagingSenderId,
    appId: process.env.FIREBASE_appId,
    measurementId: process.env.FIREBASE_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const Signin = ( {setIn, In,userId,setuserId,IDTOKEN,setIDTOKEN}) => {
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    const signInWithGoogle = () => {
    console.log("kk");
    signInWithPopup(auth, provider).then((result) => {
             console.log(result);
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
            const UID = result.user.uid;
          //  console.log(result._tokenResponse.idToken);
             const ID_TOKEN=result._tokenResponse.idToken;
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
            setIn(true);
            setIDTOKEN(ID_TOKEN);
            const sendForm = new FormData();
             {/*<h1>{localStorage.getItem("name")}</h1>*/}
             sendForm.set("getToken",String(ID_TOKEN));
            // sendForm.set("UID",String(UID));
            // sendForm.set("name",String(name));
            // sendForm.set("email",String(email));
            // sendForm.set("avatar",String(profilePic));
            async function handleSubmit(){
              const CreatedUser = await CreateUser(
                  sendForm,
            );  
             console.log(CreatedUser.data.ID)
             setuserId(CreatedUser.data.ID) 
            }   
            handleSubmit();
        })
        .catch((error) => {
            console.log(error);
        });
};
  return (
    <div className="sign">
         <button className="btn" id="btnExtend"onClick={signInWithGoogle}>Signin With Google</button>
    </div>
  )
}

export default Signin