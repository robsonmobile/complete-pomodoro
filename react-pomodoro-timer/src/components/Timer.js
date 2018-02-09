import React from 'react';

import './styles.css';
import Time from './Time';
import Controls from './Controls';

const Timer = () => {
	return (
		<div className="timer">
			<p>Timer Component that holds time and control buttons</p>
			<Time />
			<Controls />
		</div>
	);
};

export default Timer;
