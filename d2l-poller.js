export class D2LPoller {
	constructor() {
		this.intervalId = undefined;
		this.eventName = 'd2l-poll';
	}

	setupPolling(interval, eventName) {
		this.eventName = eventName || 'd2l-poll';
		if (!interval || interval <= 0) {
			throw (new Error(`Invalid interval: ${interval}`));
		}
		if (this.intervalId) {
			this.teardownPolling();
		}
		this.intervalId = setInterval(() => {
			const event = new CustomEvent(this.eventName, {
				message: 'This is an event from d2l-poller'
			});
			dispatchEvent(event);
		}, interval);
	}

	teardownPolling() {
		clearInterval(this.intervalId);
		this.intervalId = undefined;
	}
}
