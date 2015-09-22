var https = require('https');

function forecast(timezone,currentSummary,currentTemp){
  var message = 'The current summary for "' + timezone + '" is "' + currentSummary + '" and the temperature is ' + currentTemp + ' degrees F.';
  console.log(message);
}

function get(lat,long){

  var request = https.get('https://api.forecast.io/forecast/34640dc52fceb74d53adae723dfcf3f2/' + lat + ',' + long, function(res){
    console.log(res.statusCode);
    var info = '';
    res.on('data', function(body){
      info += body;
    })
    res.on('end', function(){
      var profile = JSON.parse(info);
      forecast(profile.timezone,profile.currently.summary, profile.currently.temperature);
    })
  });//end https.get api request

}//end get weather function

module.exports.getWeather = get;
