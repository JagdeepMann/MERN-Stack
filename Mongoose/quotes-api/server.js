const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json()); //allows us to use json
app.use(express.urlencoded({extended: true})); //has to do with parsing json



//api endpoints
app.get("/", (req, res) => {
    res.json({"message": "ok"});
});













//require our other modularized files(routes and config)
require("./server/config/quotes.config")
require("./server/routes/quote.routes")(app)
// so that our server can listen for requests on port 8000
app.listen(port, () => console.log(`Listening on port ${port}`));