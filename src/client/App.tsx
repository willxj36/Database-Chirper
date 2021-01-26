import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewChirpBox from './components/NewChirpBox';
import ChirpPanel from './components/ChirpPanel';
import AdminOptions from './components/AdminOptions';

const App = () => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path= '/' component={ChirpPanel} />
				<Route path='/newchirp' component={NewChirpBox} />
				<Route path='/:id/admin' component={AdminOptions} />
			</Switch>
		</BrowserRouter>
	);

};

export default App;
