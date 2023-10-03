import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_APIKEY,
//   authDomain: process.env.NEXT_AUTHDOMAIN,
//   projectId: process.env.NEXT_PROJECTID,
//   storageBucket: process.env.NEXT_STORAGEBUCKET,
//   messagingSenderId: process.env.NEXT_MESSAGINGSENDERID,
//   appId: process.env.NEXT_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCz_MrCMeX4OrXV9ybhsTVFEeK1PnOK1EQ",
  authDomain: "legalco-517c7.firebaseapp.com",
  projectId: "legalco-517c7",
  storageBucket: "legalco-517c7.appspot.com",
  messagingSenderId: "418519101922",
  appId: "1:418519101922:web:df7d208e1839ba34d289bb",
};

export const app = initializeApp(firebaseConfig);
