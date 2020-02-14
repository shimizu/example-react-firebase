import React, { useState, useRef, useEffect } from "react";
import './App.css';

import firebase from "firebase";
import { firebaseConfig } from './firebase/config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import  Hello  from "./page/login";
import  HelloSomeone  from "./page/hellowsomeone";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//firebase初期化
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};







function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Hello />
        </Route>
        <Route path="/hello/:name" exact>
          <HelloSomeone />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
