const express = require("express");
const app = express();
const port = process.env.PORT || 6700;

// To tell app where the static files are located - html/css/js files.
app.use(express.static("frontend"));

app.listen(port, function(){
    console.log("App is running on http://localhost:" + port);
})