# Automatic-Twilio Application

### Intro

This application uses Twilio's SMS API to send an SMS about vehicle maintenance.

It uses a webhook to receive reply messages to the original SMS sent.

Lastly, It provdes a URL to display all reply messages.

### Environment Variables

In order to run this application, you must set the following environment variables:

`TWILIO_ACCOUNT_SID` - your Twilio account ID. You will need to sign up with Twilio to obtain one.

`TWILIO_AUTH_TOKEN` - your Twilio auth token

`FROM_NUMBER` - The Twilio phone number to send a message from

`TO_NUMBER` - The mobile phone number to send the message to

### Configuration on Twilio's Dashboard (optional)

If you would like to receive replies to your SMS, you will need to configure following webhook URL in your Twilio Dashboard:

`https://your-fully-qualified-domain/replies`

### Running locally

1. Clone the repository: `git clone git@github.com:hbaqai/twilioapp.git`

2. cd into the directory: `cd twilioapp`

3. Install dependencies: `npm install`

4. Make sure your environment variables are set. Alternatively, copy the `.envcopy` file and rename it to `.env`. In the new `.env` file, set your environment variables. Seperate the key and value with an equal sign (ex: `FROM_NUMBER=+14152223333`), one variable on each line.

5. Run the server: `node bin/www`

### Usage

To send an sms go to the url:

`https://automatic-twilio.herokuapp.com/customer`

Replies to to the SMS received will go to a webhook if you confired it. You can check on all replies if you visit:

`https://automatic-twilio.herokuapp.com/replies`

Each JSON object in the array corresponds to a single message reply. Look in the `body` field of each JSON object to see the text that was sent.
