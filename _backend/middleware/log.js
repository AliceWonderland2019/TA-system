const logInfo = (req, res, next) => {
    req.requestTime = new Date();
    console.log("Method: ", req.method);
    console.log("URL: ", req.url);
    console.log("Time: ", req.requestTime);
    console.log("Request body: ", req.body);
    console.log("Request query: ", req.query);
    next();
};
module.exports = logInfo;