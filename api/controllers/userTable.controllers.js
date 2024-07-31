const {registerUser, loginUser, changePassword, getUserInfo, logOuts} = require('../services/users.service.js');


/**
 * @author: Pandiyan
 * @description: POST register new user
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const register = async (req, res) => {
  const { username, email, password, userRole } = req.body;
  try {
    const user = await registerUser(username, email, password, userRole);
    res.send({
      success: true,
      error: false,
      message: "User Registered successfully",
      data: {

      },
      statusCode: 200
    })
  } catch (error) {
    res.send({
      success: false,
      error:{
        errorCode: 400,
        errorMessage: error.message
      },
      message: "Failed to insert new user",
      data: null,
      statusCode: 400
    })
    }
  };

/**
 * @author: Pandiyan
 * @description: POST login registered user
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode, error and result (jwt Token)
 */

const login = async (req, res) => {
  const {email,password} = req.body;
  try{
    const {token} = await loginUser(email, password);
    res.send({
      success: true,
      error: false,
      message: "User Login successfully",
      data: {token: token

      },
      statusCode: 200
    })
  } catch(error){
    res.send({
      success: false,
      error:{
        errorCode: 400,
        errorMessage: error.message
      },
      message: "Login Failed",
      data: null,
      statusCode: 400
    })

  }
};

/**
 * @author: Pandiyan
 * @description: POST logout user
 * @param: {} req.param null
 * @return: {object} res will contain a message.
 */

const logout = async (req, res) => {
    const {username,password} = req.body;

    try{
        const result = await logOuts(username, password);
        res.send({
          success: true,
          error: false,
          message: "Logout successfully",
          data: {
          },
          statusCode: 200
        })
    }catch(error){
      res.send({
        success: false,
        error:{
          errorCode: 400,
          errorMessage: error.message
        },
        message: "Logout Failed",
        data: null,
        statusCode: 400
      });
    }
};


/**
 * @author: Pandiyan
 * @description: GET user details
 * @param: {} req.param (userId)
 * @return: {object} res will contain a statusCode, error message and result (data).
 */

const getMe = async (req, res) => {
  try{
    const user = await getUserInfo(req.userId);
    const result = {id: user.id, username: user.username, email: user.email, role: user.role, lastLogin: user.last_login}
    res.send({
      success: true,
      error: false,
      message: "user data fetched successfully",
      data: {id: user.id, username: user.username, email: user.email, role: user.role, lastLogin: user.last_login
      },
      statusCode: 200
    })
  } catch(error){
    res.send({
      success: false,
      error:{
        errorCode: 400,
        errorMessage: error.message
      },
      message: "Failed to fetch data",
      data: null,
      statusCode: 400
    });
  }
};

/**
 * @author: Pandiyan
 * @description:  PUT change password
 * @param: {} req.param (userId)
 * @return: {object} res will contain a message, statusCode and error.
 */

const changePass = async (req, res) => {
  const {currentPassword,newPassword} = req.body;
  try{
    await changePassword(req.userId,currentPassword, newPassword);
    res.send({
      success: true,
      error: false,
      message: "Password changed successfully",
      data: {

      },
      statusCode: 200
    })
  } catch(error){
    res.send({
      success: false,
      error:{
        errorCode: 400,
        errorMessage: error.message
      },
      message: "Password  not updated",
      data: null,
      statusCode: 400
    });
  }
};

module.exports = {register,login,logout,getMe,changePass};
