const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=10fcbef8a59d35d219b721628e226f5e&query=${latitude},${longitude}&units=m`
    request({url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather service', undefined)
        } else if(body.error){
            callback('Unable to connect to weather service. Try another coordinates', undefined)
        }else{
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast