const isLoggedIn = (req, res, next) => {
    // Check if the JWT token exists in cookies
    if (req.cookies.jwt) {
      next(); // Token exists, proceed to the next middleware or route handler
    } else {
      res.status(401).send('Unauthorized. Please log in.'); // Token does not exist, send unauthorized status
    }
  };
  
  module.exports = isLoggedIn;
  