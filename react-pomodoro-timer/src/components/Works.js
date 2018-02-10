import React from 'react';
import Paper from 'material-ui/Paper';

const Works = () => {
	return (
		<div className="about">
			<Paper className="about-card" zDepth={2}>
				<h1>How it Works?</h1>
				<p>
					The Pomodoro Technique provides you with a timer to keep you
					productive throughout the day. The timer switches between 25 minute
					and 5 minute intervals.
				</p>
				<br />
				<p className="footerPad">
					Emoji Timer | Developed by{' '}
					<a href="https://github.com/amandeepmittal">Aman Mittal</a>
				</p>
			</Paper>
		</div>
	);
};

export default Works;
