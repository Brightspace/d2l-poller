let intervalId;

// interval is in ms
export function setupPolling(interval) {
	if (!interval || interval <= 0) {
		throw (new Error(`Invalid interval: ${interval}`));
	}
	if (intervalId) {
		teardownPolling();
	}
	intervalId = setInterval(() => {
		const event = new CustomEvent('d2l-poll', {
			message: 'This is an event from d2l-poller'
		});
		dispatchEvent(event);
	}, interval);
}

export function teardownPolling() {
	clearInterval(intervalId);
	intervalId = undefined;
}
