import React from 'react';
import Paper from 'material-ui/Paper';

const About = () => {
	return (
		<div className="about">
			<Paper className="about-card" zDepth={2}>
				<h1>Instructions?</h1>
				<p>Timer Controls:</p>
				<p>
					<span role="img" aria-label="timer-start">
						👩‍💻
					</span>{' '}
					Start
				</p>
				<p>
					<span role="img" aria-label="timer-stop">
						⏸
					</span>{' '}
					Pause
				</p>
				<p>
					<span role="img" aria-label="timer-reset">
						⥀
					</span>{' '}
					Reset
				</p>
			</Paper>
		</div>
	);
};

export default About;
