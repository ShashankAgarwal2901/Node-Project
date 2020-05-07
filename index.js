const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/user.js");
require("./services/passport.js");
const mongoose = require("mongoose");
const keys = require("./config/keys.js");

mongoose.connect("mongodb+srv://shashankagarwal29197:kF19GnzMOVZ8Ei3w@cluster0-rknlj.mongodb.net/test?retryWrites=true&w=majority",
);

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes.js")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
