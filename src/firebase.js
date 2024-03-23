import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBF2ul9BqqcCzIXhSb1FVEHwYa2qswFd6o",
    authDomain: "app-feda2.firebaseapp.com",
    projectId: "app-feda2",
    storageBucket: "app-feda2.appspot.com",
    messagingSenderId: "230897588481",
    appId: "1:230897588481:web:c15445882be59e86aa2300",
    databaseURL: "https://app-feda2-default-rtdb.firebaseio.com"
};


export const app = initializeApp(firebaseConfig)