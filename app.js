const express = require("express");
const http = require("https");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function(req, res){
    res.json({ "slackUsername": 'Tunmicrypt',
                    "backend": true,
                    "age": 21,
                    "bio": "I am a  back end engineer. My dream is to create something of value to the community"
                  });
})


app.listen( process.env.PORT || 3000, function(error){
  if(!error) {console.log("server started at port 3000")}
  else console.log("error occured");;
})
