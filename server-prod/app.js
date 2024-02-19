const express = require("express");
const cors = require("cors");

const indexRouter = require("./router/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.static(__dirname + "/build"));

app.use("/server", indexRouter);

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
})

app.listen(process.env.PORT || 5500, (err) => {
    if(err)
        console.log(err);
    else
        console.log("Server is running on port 8000");
})
