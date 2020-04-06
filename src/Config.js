import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA207x3GUsdgN2AmRx30_iEFf32VfOoMbI",
    authDomain: "bookapp-e2673.firebaseapp.com",
    databaseURL: "https://bookapp-e2673.firebaseio.com",
    projectId: "bookapp-e2673",
    storageBucket: "bookapp-e2673.appspot.com",
    messagingSenderId: "467169194575",
    appId: "1:467169194575:web:181dd43259094cea1a303a",
    measurementId: "G-XXWY0FH8R4"
  };
  const app = Firebase.initializeApp(firebaseConfig);

  export const db = app.database();