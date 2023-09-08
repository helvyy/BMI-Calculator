//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmiCalculator" , function(request , response){
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator" , function(request , response){

    var w = parseFloat(request.body.weight);
    var h= parseFloat(request.body.height);

    var result = w / (h * h);

    response.send("The result of you're BMI is:" + result);
});

app.listen(3000 , function(){
    console.log("Server running on port 3000");
});


