const request = require('postman-request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZmFiaW9hZ2lsZGEiLCJhIjoiY2t4cmlyaTF5MjAxczJ3a29zMHB5cjk3eSJ9.O8SznYeWhQYw1OCAJwL9ng&limit=1`
    request({url: url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to location services', undefined)
        } else if (body.features.lenth === 0){
            callback('Unable to connect to location. Try another search', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode