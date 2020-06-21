// Basics Template website


var express = require("express");
var app = express();
var request = require("request");


app.set("view engine", "ejs"
);

app.get("/",function(req,res)
	   {

	res.render("search");
	
}	   
	   ) ;



app.get("/result",function(req,res)
	   {
	var url = 'http://www.omdbapi.com/?apikey=thewdb&s=' + req.query.movie ;
	request(url,function(error,response,body)
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
			res.render("result",{data: json});
		}
	
	}
)
}	   
	   ) ;

app.listen (3000, '0.0.0.0',function
(){
	
console.log ("server started!" );	
	
}   );