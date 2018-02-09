import React from 'react';

import Time from './Time';
import Controls from './Controls';

const Timer = () => {
	return (
		<div>
			<p>Timer Component that holds time and control buttons</p>
			<Time />
			<Controls />
		</div>
	);
};

export default Timer;
