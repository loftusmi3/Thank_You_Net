const whitelist = require('../config/whitelist');

// For fixing some CORS include front-end thing
const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (whitelist.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credentials