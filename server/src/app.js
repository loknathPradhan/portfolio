const express = require("express")
require("./connection/connect");
const app = express();
const cors = require('cors');
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login")


app.use(cors());
app.use("/avi/blog", signupRoute);
app.use("/avi/blog/", loginRoute)

app.get("/", (req, res)=> {
    res.send("hello form loknath")
})

app.listen(8000, ()=> {
    console.log("The server is up at 3000 port...")
})