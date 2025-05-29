import jwt from 'jsonwebtoken';
import {db} from '../libs/db.js';
import { use } from 'react';

export const authMiddleware = async(req,res,next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({
                message:"Unathorized access"
            })
        }
        
        let decoded;
        
        try {
            decoded = jwt.verify(token , process.env.JWT_SECRET);
        } catch (error) {
                 return res.status(401).json({
                message:"Unathorized access"
            })
        }
        
        const user = db.USER.findUnique({
            where:{
                id:decoded.id
            },
            select:{
                id:true,
                name:true,
                email:true,
                role:true
            }
        });
        
        if(!user) {
            return res.status(404).json({
                message:"User not found"
            });    
    }
    req.user = user;
    next();
}

catch (error) {
    console.error('error authenitccating', error);
    return res.status(404).json({
        message:"error authenticating user"
    });     
}
}

export const checkAdmin = async(req,res,next) => {
    try {
        const userId = req.user.id;
        const user = await db.USER.findUnique({
            where:{
                id:userId
            },
            select:{
                role:true
            }
        })
        
        if (!user || user.role !== 'ADMIN'){
            return res.status(401).json({
            message:"Unathorized access admins only"
            })
        }
    }
    catch (error) {
        return res.status(401).json({
        message:"Unathorized access admins only"
        })
    }
}