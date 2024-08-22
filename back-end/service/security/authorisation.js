const jwt = require("jsonwebtoken");
require("dotenv").config();
const config = process.env;


const authorisation = (role) => {
    return async (req, res, next) => {
		try{
			const user = req.signedCookies?.user;
		const xAccessToken = user?.token;
		console.log("Access Token", xAccessToken);
		if (!xAccessToken) {
			return res.status(401).send({
			  auth: false,
			  message: "No access token provided.",
			  status: 401,
			  payload: null,
			});
		  }
			const decoded = jwt.verify(xAccessToken, config.TOKEN_KEY);
			console.log("decoded:", decoded);
		  
		 
		const userRole = decoded.account_type;
		const requiredRole = role;
		if (convertToRole(userRole) >= convertToRole(requiredRole)) {
			return res.status(403).send({
				auth: false,
				message: "You are not authorized to access this page from auth.",
				status: 403,
				payload: null,
			  });
		}
		return next();
    } catch (error) {
      console.error("Authorization error:", error);
      return res.status(500).send({
        auth: false,
        message: "Internal server error.",
        status: 500,
        payload: null,
      });
    }
}
}
   

    




const convertToRole = (role) => {
    switch (role) {
        case "user":
            return 1;
        case "admin":
            return 2;
        default:
            return 0;
    }
}

module.exports = authorisation;