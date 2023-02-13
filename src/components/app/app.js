import { Component } from 'react';

import Header from '../header/header';
import Promo from '../promo/promo';

import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
			<div className="app">
				<Header/>

				<Promo/>
			</div>
		  );
	}
}

export default App;
