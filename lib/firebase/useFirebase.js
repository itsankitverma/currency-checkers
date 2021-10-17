import { Analytics, getAnalytics, logEvent } from "firebase/analytics";
import {
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

import { writeBatch, doc, getDoc, getFirestore } from "firebase/firestore";

import * as React from "react";
import app from "./initializeFirebase";

export function useFirebase() {
  const [user, setUser] = React.useState(null);
  const [analytics, setAnalytics] = React.useState(null);
  const provider = new GoogleAuthProvider();
  const db = getFirestore();
  console.log(user);
  React.useEffect(() => {
    const auth = getAuth();

    if (app) {
      setAnalytics(getAnalytics(app));
    }

    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const isLoggedIn = () => {
    return !!user;
  };

  const isUsernameAvailable = async (username) => {
    const user = await getDoc(doc(db, "usernames", username));
    return user.exists();
  };

  const registerUsername = async (username, user) => {
    if (user === null) {
      Promise.reject("user empty");
      return;
    }

    const batch = writeBatch(db);
    const usernameRef = doc(db, "usernames", username);
    batch.set(usernameRef, { uid: user.uid });
    const userRef = doc(db, "users", user.uid);
    batch.set(userRef, {
      username: username,
      photoURL: user.photoURL,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
    });

    await batch.commit();
  };

  const handleSignInWithGoogle = async (username) => {
    const auth = getAuth();
    return setPersistence(auth, browserSessionPersistence).then(() => {
      return signInWithPopup(auth, provider)
        .then(async (result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          if (credential) {
            setUser(result.user);
            await registerUsername(username, result.user);
            return true;
          }
        })
        .catch((error) => {
          analytics &&
            logEvent(analytics, "google_login_failed", {
              errorCode: error.code,
              errorMessage: error.message,
              credential: GoogleAuthProvider.credentialFromError(error),
            });
          return false;
        });
    });
  };

  const handleSignOut = async () => {
    const auth = getAuth();
    await signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => {
        analytics &&
          logEvent(analytics, "signOut_failed", {
            errorCode: error.code,
            errorMessage: error.message,
            credential: GoogleAuthProvider.credentialFromError(error),
          });
      });
  };

  return {
    handleSignInWithGoogle,
    handleSignOut,
    user,
    isLoggedIn,
    analytics,
    isUsernameAvailable,
  };
}
