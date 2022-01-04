import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import firebaseAuthentication from "../../Firebase/FirebaseInit";

// call firebase config file
firebaseAuthentication();

const useFirebase = () => {
  // Post Type
  const [postType, setPostType] = useState("");

  // View Type
  const [view, setView] = useState(false);

  // declare user state
  const [user, setUser] = useState({});
  // user state change state
  const [isLoading, setIsLoading] = useState(true);
  // error state
  const [authError, setAuthError] = useState("");

  const [singleUser, setSingleUser] = useState({});

  // Post Type
  const handlePostTypeText = () => {
    setPostType("text");
  };
  const handlePostTypeImage = () => {
    setPostType("image");
  };
  const handlePostType = () => {
    setPostType("others");
  };

  // View Type
  const handleViewType = (x) => {
    setView(x);
  };

  //date

  // declare auth
  const auth = getAuth();

  // google auth
  const googleProvider = new GoogleAuthProvider();

  // register new user
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);

        //default image for user
        const photo = "https://files.catbox.moe/qzm8ip.png";

        // // save user data to the database
        saveUser(email, name, photo, "POST");

        // send name to firebase after create
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login user
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // google sign in
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, user.photoURL, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // logout user
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // saved user data to DB function
  const saveUser = (email, displayName, photoURL, method) => {
    const user = { email, displayName, photoURL };

    fetch("https://enigmatic-reef-50171.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    registerUser,
    authError,
    loginUser,
    signInWithGoogle,
    logout,
    user,
    isLoading,
    postType,
    view,
    handleViewType,
    handlePostTypeText,
    handlePostTypeImage,
    handlePostType,
    setSingleUser,
    singleUser,
  };
};

export default useFirebase;
