const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STRG_BUKT,
    messagingSenderId: process.env.REACT_APP_MSSG_SNDR_ID,
    appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_APP_APP_MEASUREMENT,
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()



// GOOGLE AUTH
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'propmt': 'select_account'
});

export const addUserDocument = async (authenticated) => {
    if (!authenticated) return;
    const userRef = firestore.doc(`users/${authenticated.uid}`)
    const snapShot = await userRef.get()

    console.log(snapShot)
    if (!snapShot.exist) {

        const { displayName, email } = authenticated
        const timeCreated = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                timeCreated
            })
        } catch (error) {
            console.log("there was a problem " + error.message)
        }

    }

    return userRef
}



export default firebase;