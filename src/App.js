import React, { useState, useRef, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginEntry from './login';
import Page1 from './page/page1';

import firebase from './firebase';

function App() {
	const [ authed, setAuthed ] = useState();

	firebase.auth().onAuthStateChanged((user) => {
		setAuthed(user);
	});

	if (!authed) {
		return <LoginEntry />;
	}
	return (
		<Router>
			<Switch>
				<Route path="/" component={Page1} />
			</Switch>
		</Router>
	);
}

export default App;
