# d2l-poller

An ES6 module to emit periodic events.

## Usage

`setupPolling(interval [, eventName])` starts emitting `<eventName>` events every `interval` milliseconds. If `eventName` is not provided, `d2l-poll` events are emitted. Calling this again will emit events with the new `interval` and `eventName`.

You'll want to listen for `<eventName>` or `d2l-poll` events on `window`.

`teardownPolling()` stops emitting events.
