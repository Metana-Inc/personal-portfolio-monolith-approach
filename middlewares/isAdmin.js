const isAdmin = (req, res, next) => {
    // Check if user is logged in and has admin role
    if (req.user && req.user.role === 'admin') {
      next(); // User is admin, proceed to the next middleware or route handler
    } else {
      res.status(403).send('Access denied. Admin role required.'); // User is not admin, send forbidden status
    }
  };
  
  module.exports = isAdmin;
  