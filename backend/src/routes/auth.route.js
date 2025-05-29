import express from 'express';
import { register,
    login,
    logout,
    check
} from '../contoller/auth.controller.js';
import {authMiddleware} from '../middleware/auth.middleware.js';

const authroutes = express.Router();

authroutes.route('/register').post(register)
authroutes.route('/login').post(login)
authroutes.route('/logout').get(authMiddleware,logout)
authroutes.route('/check').get(authMiddleware,check)

export default authroutes;
