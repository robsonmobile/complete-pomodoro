import React, { Component } from 'react';

import '../styles/styles.css';
import Time from './Time';
import Controls from './Controls';
import { TWENTY_FIVE, FIVE } from '../utils/helpers';
import Alarm from '../songs/alarm.mp3';

const alarmAudio = new Audio(Alarm);

class Timer extends Component {
	constructor() {
		super();

		this.handleStartTimer = this.handleStartTimer.bind(this);
		this.handleStopTimer = this.handleStopTimer.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.displayTime = this.displayTime.bind(this);
		this.getTimeRemaining = this.getTimeRemaining.bind(this);
		this.nextPhase = this.nextPhase.bind(this);
		this.onReset = this.onReset.bind(this);
	}

	state = {
		interval: null,
		step: 0,
		timeRemaining: this.getTimeRemaining(TWENTY_FIVE)
	};

	handleStartTimer() {
		if (!this.state.interval) {
			this.startTimer();
		}
	}

	handleStopTimer() {
		if (this.state.interval) {
			clearInterval(this.state.interval);
			this.setState({
				interval: null
			});
		}
		alarmAudio.play();
	}

	startTimer() {
		this.displayTime();
		this.setState({
			interval: setInterval(this.displayTime, 1000)
		});
	}

	displayTime() {
		if (this.state.timeRemaining.total > 0) {
			let timeRemaining = this.getTimeRemaining(
				this.state.timeRemaining.total - 1000
			);
			this.setState({
				timeRemaining
			});
		} else {
			this.nextPhase();
		}
	}

	getTimeRemaining(timeInMilliSecs) {
		const total = timeInMilliSecs,
			minutes = Math.floor((total / 1000 / 60) % 60),
			seconds =
				Math.floor((total / 1000) % 60) < 10
					? '0' + Math.floor((total / 1000) % 60)
					: Math.floor((total / 1000) % 60);

		return {
			total,
			minutes,
			seconds
		};
	}

	nextPhase() {
		this.handleStopTimer();
		let step = this.state.step + 1;
		this.setState({
			step,
			timeRemaining:
				step % 2 === 0
					? this.getTimeRemaining(TWENTY_FIVE)
					: this.getTimeRemaining(FIVE)
		});
	}

	onReset() {
		this.setState({
			timeRemaining: this.getTimeRemaining(TWENTY_FIVE)
		});
	}

	render() {
		return (
			<div className="timer">
				<Time time={this.state.timeRemaining} />{' '}
				<Controls
					handleStartTimer={this.handleStartTimer}
					handleStopTimer={this.handleStopTimer}
					onReset={this.onReset}
				/>
			</div>
		);
	}
}

export default Timer;
