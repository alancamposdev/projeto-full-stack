const express = require("express");
const app = express();
require("dotenv").config();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/v1", require("./routes/cidades"));
app.use("/v1", require("./routes/pessoas"));
app.use("/v1", require("./routes/login"));

require("./server")(app);
module.exports = app;
