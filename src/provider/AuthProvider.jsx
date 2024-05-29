import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    /* google login provider  */
    const googleProvider = new GoogleAuthProvider()

    const axiosPublic = useAxiosPublic(); // call axious for cutom url
    /*Register  new user use Email and password*/
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* sig in with email & password */
    const signInEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    /* signIn with google  */
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    /* Log out */
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //*Current user k dhore rakhe screen a. page load dileo user theke jay .sei jonne eita use koa hoyeche 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {

                /* get token and store client */
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            // console.log(res.data.token);
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else {
                //TODO : remove token(if token stroed n the client side: local storage, caching,in memory)
                localStorage.removeItem('access-token')
            }
            // console.log(currentUser);

            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }

    }, [axiosPublic])

    const authInfo = {
        user, loading, createUser, signInEmail, googleSignIn, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;