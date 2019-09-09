let poll = false,
	intervalId;

// interval is in ms
export function setupPolling(interval) {
	if (!interval || interval <= 0) {
		throw (new Error(`Invalid interval: ${interval}`));
	}
	if (intervalId) {
		teardownPolling();
	}
	intervalId = setInterval(() => {
		if (poll) {
			const event = new CustomEvent('d2l-poll', {
				message: 'This is an event from d2l-poller'
			});
			dispatchEvent(event);
		}
	}, interval);
	poll = true;
}

export function teardownPolling() {
	poll = false;
	clearInterval(intervalId);
	intervalId = undefined;
}

export function suspendPolling() {
	poll = false;
}

export function resumePolling() {
	poll = true;
}
