import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Timer from './Timer';
import About from './About';
import Works from './Works';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<Timer />
					<About />
					<Works />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
