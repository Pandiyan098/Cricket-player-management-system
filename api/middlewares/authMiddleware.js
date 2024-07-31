const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;



const authenticate = (req, res, next) => {
  const jwtToken = req.headers.authorization?.split(' ')[1];
  if(jwtToken === undefined){
    return res.send({
      success: false,
      error: {
        errorCode: 400,
        errorMessage: "JWT Token missing "
      },
      message: "JWT token not found ",
      statusCode: 400
    });
  }else {

  
  try{
    const verifiedToken = jwt.verify(jwtToken, JWT_SECRET_KEY);
      req.userId = verifiedToken.userId;
    req.role = verifiedToken.role;
    next();
  }catch(error){
    res.send({
      success: false,
          error: {
            errorCode: 400,
            errorMessage: "Invalid JWT token"
          },
          message: "Invalid JWT token ",
          statusCode: 400
    
    })
    ;
  }
}
};

module.exports = authenticate;


