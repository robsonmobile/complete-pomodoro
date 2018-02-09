import React from 'react';

const Controls = props => {
	return (
		<div className="controls">
			<button onClick={props.handleStartTimer}>
				<span role="img" aria-label="start-timer">
					👩‍💻
				</span>
			</button>
			<button onClick={props.handleStopTimer}>
				<span role="img" aria-label="pause-timer">
					⏸{' '}
				</span>
			</button>
			<button onClick={props.onReset}>
				<span role="img" aria-label="reset-timer">
					⥀
				</span>
			</button>
		</div>
	);
};

export default Controls;
