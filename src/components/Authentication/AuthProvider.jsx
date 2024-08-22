import { createContext, useEffect, useState } from "react";
import auth from "./firbase.config.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

 export  const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([])

    const register = (email, password) =>{
        return (createUserWithEmailAndPassword(auth, email, password))
    }

    const logIn = (email, password) =>{
        return (signInWithEmailAndPassword(auth, email, password))
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        register,
        logIn,
        logOut
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser)
        })
        return () => unSubscribe()
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;