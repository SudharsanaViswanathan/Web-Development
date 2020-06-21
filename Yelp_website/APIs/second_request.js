var request = require('request');
request('https://api.covid19api.com/summary',function(error,response,body)
	{
	if (error)
		{
			console.log(error);
		}
	else if (response.statusCode == 200)
		{
			//console.log(body);
			var json = JSON.parse(body);
			console.log("New Cases: " + json.Global.NewConfirmed);
		}
	
	}
);
