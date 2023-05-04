const jwt=require('jsonwebtoken')
const authConfig=require('../config/auth')
module.exports =async function verifyToken(req, res, next) {
  // Get the token from the headers
  const token = req.headers["x-access-token"];
  //console.log(token)

  // if does not exists a token
  if (!token) {
    return res
      .status(401)
      .send({ auth: false, message: "No Token aws Provided" });
  }

  // decode the token
  const decoded =  jwt.verify(token, authConfig.secret);

  // save the token on request object to using on routes
  req.userId = decoded.id;

  // continue with the next function
  next();
}