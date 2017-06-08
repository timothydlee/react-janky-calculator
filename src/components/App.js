import React, { Component } from 'react';
import Calculator from './Calculator';


class App extends Component {
	render() {
		return (
			<div>
				<h1 className='header'>Janky Calculator</h1>
				<Calculator/>
			</div>
		)
	}
}

export default App;