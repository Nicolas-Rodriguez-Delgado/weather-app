const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e95248321fcfda7393ce89a60189842f&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error) {
      callback("Unable to find location! Try another search", undefined);
    } else {
      const message =
        body.current.weather_descriptions[0] +
        " It is currently " +
        body.current.temperature +
        " it feels like " +
        body.current.feelslike;
      callback(undefined, message);
    }
  });
};

module.exports = forecast;
