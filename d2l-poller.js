export class D2LPoller {
	constructor() {
		this.intervalId = undefined;
	}

	setupPolling(interval) {
		if (!interval || interval <= 0) {
			throw (new Error(`Invalid interval: ${interval}`));
		}
		if (intervalId) {
			teardownPolling();
		}
		this.intervalId = setInterval(() => {
			const event = new CustomEvent('d2l-poll', {
				message: 'This is an event from d2l-poller'
			});
			dispatchEvent(event);
		}, interval);
	}

	teardownPolling() {
		clearInterval(intervalId);
		this.intervalId = undefined;
	}
}
