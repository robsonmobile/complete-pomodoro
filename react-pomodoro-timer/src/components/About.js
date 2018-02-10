import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
	padding: 10,
	height: 320,
	width: 500,
	textAlign: 'center',
	fontSize: '1.2rem'
};

const About = () => {
	return (
		<div className="about">
			<Paper style={style} zDepth={2}>
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
