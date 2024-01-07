const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();


const application = express();

const PORT = process.env.PORT || 8080;

application.set("view engine", "ejs");
application.use(express.static("public"));

application.use(express.urlencoded({
    extended: true
}))
application.use(express.json());

application.get("/", (req, res) =>{
    res.render("index")
})

application.post("/convert-mp3", async (req, res) => {
    const videoId = req.body.videoID;
    cons
})

application.listen(PORT, () => {
    console.log('Server started on the port ${PORT}');
})