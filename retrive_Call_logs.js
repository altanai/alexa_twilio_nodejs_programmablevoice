const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls.list({limit: 20})
    .then(calls => calls.forEach(c => console.log(c.sid)));