const request = require("request");

const getWeatherInfo = (address, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=4212f4a4a249b5c515ca4235b20a6f68&query=" +
    address;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect the weather service.", undefined);
    } else if (body.error) {
      callback("Unable to connect to find the location.", undefined);
    } else {
      //   const data = JSON.parse(response.body);
      const data = body;
      callback(
        undefined,
        data.location.name +
          " weather is: " +
          data.current.weather_descriptions[0] +
          " temperature is: " +
          data.current.temperature +
          "C"
      );
    }
  });
};

module.exports = getWeatherInfo;
