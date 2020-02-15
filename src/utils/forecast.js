const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/7f25097087efc5d46472180bb3601115/'+ lat + ',' + long

    request({ url, json: true }, (error, { body }) => {
        
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Weather service unable to find location!', undefined)
        } else{
            const forecast = body.daily.summary + " It is currently " + body.currently.temperature + " degrees out. There is a "+ body.currently.precipProbability + "% chance of rain"
            callback(undefined, forecast)
        }
    })
}

module.exports = forecast