import { useEffect, useState } from "react"
import app from "../firebase.init";
import { getAuth,GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";



const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const useFirebase =()=>{
    const[user,setUser] = useState({});


    const singInWithGoogle = () =>{
        signInWithPopup(auth, googleprovider)
        .then(result =>{
            const user =result.user;
            setUser(user);
            console.log(user);
        })
    }

    const handleSignout =() =>{
        signOut(auth)
        .then(()=>{})
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user =>{
            setUser(user);
        })
    },[])

return{user,handleSignout,singInWithGoogle};
}
export default useFirebase;