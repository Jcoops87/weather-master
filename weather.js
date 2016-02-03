$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<h1>Today's weather forecast </h1>" +
    "<ul> <li> Temperature: " + data.currently.apparentTemperature + " degrees </li>" +
    "<li> Chance of Rain: " + data.currently.precipProbability + "% </li>" +
    "<li> Humidity: " + data.currently.humidity + "% </li> </ul>" +

    "<h2>Three Day Forecast </h2>" +
    "<ul> <li> Tomorrow: " + data.daily.data[1].apparentTemperatureMin + " degrees min. " + data.daily.data[1].apparentTemperatureMax + " degrees max </li>" +
    "<li> The day after tomorrow: " + data.daily.data[2].apparentTemperatureMin + " degrees min. " + data.daily.data[2].apparentTemperatureMax + " degrees max </li>" +
    "<li> The day after, the day after tomorrow : " + data.daily.data[3].apparentTemperatureMin + " degrees min. " + data.daily.data[3].apparentTemperatureMax + " degrees max </li>" ;



    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
