const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c2fb8caff8a83c56d0a1805e19c73e9a&query=' + lat + ',' + long + '&units=m'
    request({ url, json: true }, (error, { body }) => {     // { body } is used as destructuring response which means response to { body } = response, and body can be directly used
        if (error) {
            callback('Unable to connect to weatherstack service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, { body })
        }
    })
}

module.exports = forecast