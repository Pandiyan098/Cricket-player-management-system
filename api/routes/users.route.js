const express = require('express');
const {register, login, logout, getMe, changePass} = require('../controllers/userTable.controllers');
const  authenticate  = require('../middlewares/authMiddleware');

const userRouter = express.Router({});

userRouter.post("/register",register);

userRouter.post("/login",login);

userRouter.post("/logout",logout);

userRouter.get("/me",authenticate,getMe);

userRouter.put("/change-password",authenticate,changePass);

module.exports = userRouter;
