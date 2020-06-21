// Basics Template website


var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs"
);

app.get("/",function(req,res)
	   {
	request('https://api.covid19api.com/countries',function(error,response,body)
	{
	if (error)
		{
			console.log(error);
		}
	else if (response.statusCode == 200)
		{
			//console.log(body);
			var json = JSON.parse(body);
			//res.send("New Cases: " + json.Global.NewConfirmed);	
			res.render("view",{data: json});
		}
	
	}
)
}	   
	   ) ;

app.listen (3000, '0.0.0.0',function
(){
	
console.log ("server started!" );	
	
}   );