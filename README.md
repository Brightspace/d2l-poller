# d2l-poller

An ES6 module to emit periodic events.

## Usage

You'll want to listen for `d2l-poll` events on `window`.

`setupPolling(interval)` starts emitting events every `interval` milliseconds. Calling this again will emit events with the new `interval`.

`teardownPolling()` stops emitting events.

`suspendPolling()` temporarily prevents events from being emitted.

`resumePolling()` does exactly what it says.
