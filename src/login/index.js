import React from 'react';

import firebase from '../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Configure FirebaseUI.
const uiConfig = {
	signInFlow: 'popup',
	// We will display Google and Facebook as auth providers.
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID
		//    firebase.auth.FacebookAuthProvider.PROVIDER_ID
	]
};

export default function Hello() {
	return (
		<div>
			<h1>Hello</h1>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
		</div>
	);
}
