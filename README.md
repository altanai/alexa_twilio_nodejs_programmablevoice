# Alexa <--> Twilio integration with programmable Voice 

This project aims to use nodejs to create a call interception program that interacts with alexa .

## Pre-requisites

Twilio Account Authentication
Twillio developer API and TwiML (the Twilio Markup Language) knowledge 
Alexa Developer Account 
Knowledge of Alexa Custom Skills
AWS Lambda for Serverless 

## Steps 
1. Call Twillio on a purchased incoming number
2. Route the call to my configured programmable voice server on nodejs deployed on public Url. 
3. Trigger alexa app using captured call.
4. Choose a resulting action from alexa such as home commands which will kick off your automation.
5. Return confirmation data from alexa app and send to twillio app to send to the user.


## References 
- Twillio voice API on nodejs - https://www.twilio.com/voice/api
- Alexa custom akills - https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html
- AWS lambda nodejs https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html
- https://www.twilio.com/blog/creating-a-smart-assistant-using-twilio-voice-and-amazon-alexa-laravel-php
