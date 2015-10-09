# Pusher Auth Server for the Pusher reveal.js remote

A Pusher authentication server for the [Pusher remote control library for reveal.js](https://github.com/pusher-community/pusher-revealjs-remote).

## Set up

The server assumes that the following environment variables are set up:

* `PUSHER_APP_ID` - Your Pusher Application ID
* `PUSHER_APP_KEY` - Your Pusher Application Secret
* `PUSHER_APP_SECRET` - Your Pusher Application Key

## Run the server

```bash
$ node index.js
```

## Deploy to Heroku

As above, you'll need to set up the required environment variables.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
