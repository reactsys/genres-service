function authorize(req, res, next){
    console.log("Authenticating...");
    next();
}

module.exports = authorize;