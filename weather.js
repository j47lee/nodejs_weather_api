var https = require('https');

function forecast(currentSummary,currentTemp){
  var message = 'The current summary is "' + currentSummary + '" and the temperature is ' + currentTemp + ' degrees F.';
  console.log(message);
}

var request = https.get('https://api.forecast.io/forecast/34640dc52fceb74d53adae723dfcf3f2/33.8796,-117.5380', function(res){
  console.log(res.statusCode);
  var info = '';
  res.on('data', function(body){
    info += body;
  })
  res.on('end', function(){
    var profile = JSON.parse(info);
    forecast(profile.currently.summary, profile.currently.temperature);
  })



});//end https.get api request
