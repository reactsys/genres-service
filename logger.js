function log(req, res, next){
    console.log(`Request received...`);
    next();
}

module.exports = log;