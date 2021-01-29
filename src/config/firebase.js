import firebase from 'firebase/app'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1lZ-XrqYKHlMRp1g66LaOf9k7GRv6hag",
    authDomain: "restaurantappdev.firebaseapp.com",
    projectId: "restaurantappdev",
    storageBucket: "restaurantappdev.appspot.com",
    messagingSenderId: "310073617877",
    appId: "1:310073617877:web:bf2136f8af9900dd2f615c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;