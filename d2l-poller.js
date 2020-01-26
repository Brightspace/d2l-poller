export class D2LPoller {
	/**
	 * @param {number} interval - Event interval, in milliseconds.
	 * @param {string} [eventName='d2l-poll'] - The name of the emitted CustomEvent. 
	 */
	setupPolling(interval, eventName) {
		if (typeof interval !== 'number' || interval <= 0) {
			throw new Error(`Invalid interval: ${interval}`);
		}

		const pollEvent = new CustomEvent(eventName || 'd2l-poll', {
			detail: {
				message: 'This is an event from d2l-poller'
			}
		});
		
		this.teardownPolling();

		this.intervalId = setInterval(() => dispatchEvent(pollEvent), interval);
	}

	teardownPolling() {
		clearInterval(this.intervalId);
		delete this.intervalId;
	}
}
