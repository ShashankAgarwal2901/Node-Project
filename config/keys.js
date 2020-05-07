if (process.env.NODE_ENV === "production") {
	module.exports = require("./prod.js");
} else {
	module.exports = require("./dev.js");
}

//DBUsername=shashankagarwal29197
//DBPassword=kF19GnzMOVZ8Ei3w

//prodUsername=saofcl97
//prodPassword=xRrn2b5o0otY34H8

//prodGoogleID=413257201503-ud76gbb1p0ksm5ccdhodbf137bhkv1nh.apps.googleusercontent.com
//prodGoogleSecret=ZCDTBUTf5iaRtIz6rn5ZZUpi
