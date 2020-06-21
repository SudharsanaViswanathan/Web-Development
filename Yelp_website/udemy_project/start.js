var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/",function(req,res)
	   {

	res.render("homepage");
	
}	   
	   ) ;

app.get("/gallery",function(req,res)
	   {
	
	var data = [{name:"Delhi Park",url:"https://i.ytimg.com/vi/7V4FjCTtrmo/hqdefault.jpg"},{name:"Chennai Library",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJRBYSqsoJVBOQid1w3s48z7YbuqMJ_kJNaYykATJQLLjecYZX&usqp=CAU"},{name:"Mumbai Stadium",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZyYed8zpTO_27uEnALf_KuOR5HGQERGbE8PpXf1Wlsc01G6nK&usqp=CAU"}]
	res.render("gallery",{data: data});
	
}
	   
	   );


app.listen (3000, '0.0.0.0',function
(){
	
console.log ("server started!" );	
	
}   );