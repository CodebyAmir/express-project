const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization').split(' ')[1];  // Get the token part only

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log('Decoded Token:', decoded);  // Check the decoded token
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Token verification failed:', err);  // Log the error for more details
    res.status(401).json({ message: 'Token is not valid' });
  }  
};