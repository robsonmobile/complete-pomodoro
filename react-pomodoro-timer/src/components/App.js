import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Timer from './Timer';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<Timer />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
