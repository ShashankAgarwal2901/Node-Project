const keys = require("../config/keys.js");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin.js");

module.exports = (app) => {
	app.post("/api/stripe",requireLogin, async (req, res) => {
		console.log("Stripe token body:", req.body);
		const charge = await stripe.charges.create({
			amount: 5000,
			currency: "inr",
			description: "Rs.50 for 5 credits",
			source: req.body.id,
		});
		//console.log('---------------------\ncharge object:',charge);
		req.user.credits += 5;
		const user = await req.user.save();
		res.send(user);
	});
};
