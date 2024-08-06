require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {getUserEmail, createUser, updateLastLogin, getUserId, changeUserPassword, getUserPass} = require('../dao/users.dao');
const { error } = require('console');

const JWT_SECRET = process.env.JWT_SECRET_KEY;

/**
 * @author: Pandiyan
 * @description: POST register new user
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode and error.
 */

const registerUser = async (username, email, password, userRole) => {
  const passwordHash = await bcrypt.hash(password, 10);
  const last_login = new Date();
  return await createUser(username, email, passwordHash, userRole, last_login);
};

/**
 * @author: Pandiyan
 * @description: POST login user
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode and error.
 */


const loginUser = async (email,password) => {
    const user  = await getUserEmail(email);
    const isValidPass = await bcrypt.compare(password, user.password_hash);
    if(user !== undefined){
        if(isValidPass){
            const jwtToken = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '30d' });
            
            await updateLastLogin(user.id);
            
            return {jwtToken};
        }
        throw new Error("invalid password");
    }
    throw new Error("Invalid email and password");
};


/**
 * @author: PandiyanPandiyan
 * @description: POST send logout message
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode and error.
 */

const logOuts = async(username,password) => {
    const user = await getUserPass(username);
    const isValidPass = await bcrypt.compare(password,user.password_hash);
    if(!isValidPass) {
      throw new Error("invalid password")
    }
    return user
}

/**
 * @author: Pandiyan
 * @description: PUT change password
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode and error.
 */

const changePassword = async (userId,currentPassword, newPassword) => {
  const user =  await getUserId(userId);
  const isValidPass = await bcrypt.compare(currentPassword, user.password_hash);
  if(isValidPass===false){
    throw new Error("invalid current password")
  }
  const newPasswordHash = await bcrypt.hash(newPassword, 10);
  return changeUserPassword(userId, newPasswordHash);
};


/**
 * @author: Pandiyan
 * @description: GET user details
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const getUserInfo = async (userId) => {
  return getUserId(userId);
};


module.exports = {registerUser, loginUser, changePassword, getUserInfo , logOuts};
