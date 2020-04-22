const express = require("express");

const app = express();

app.get("/a", (req, res) => {
	res.send({ hi: "there" });
});

const PORT = process.env.port || 5000;
app.listen(PORT);

