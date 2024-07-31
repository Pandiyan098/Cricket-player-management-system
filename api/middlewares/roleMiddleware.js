const authorize = (roles) => (req, res, next) => {
    if (roles.includes(req.role) === undefined) {
            return res.send({
                success: false,
                error: {
                    errorCode: 400,
                    errorMessage: "Access denied for this user"
                },
                message: "Access Denied",
                data: null,
                statusCode: 400
              });
        }
    next();
  };
  
  module.exports =  authorize ;
  
  