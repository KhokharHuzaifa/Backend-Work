import { userModel } from "../Model/user.model.js";
import bcrypt from 'bcrypt'
import jwt from'jsonwebtoken';

export default class authController {

   async signUp(req,res,next){
        try {
            const user = req.body;
            user.password = await bcrypt.hash(user.password,10);
            await userModel.create(user)
            res.json({
                message:'User Created'
            })
            
        } catch (error) {
            next(error)
        }
    }

    async Login(req,res,next){
        try {
            const body = req.body;

            if(!body.email) return next(new Error('Please provide Email'));
            if(!body.password) return next(new Error('Please provide Password'));

            const matchedUser = await userModel.findOne({email:body.email})
            
            if(matchedUser==null) return next(new Error('Email doesn\'t Exist'));
            
            const matchedPassword = await bcrypt.compare(body.password, matchedUser.password);

            if(!matchedPassword) return next(new Error('Password doesn\'t match'))

            const token = jwt.sign({
                id:matchedUser._id,
                email:matchedUser.email,
                username:matchedUser.username,
                role:matchedUser.roles
            }, process.env.JWT_SECRET, {expiresIn:'1h'});

            res.cookie('auth_token', token, {maxAge:900000, httpOnly:true}).json({
                message:'Login Successfully and cookie set'
            })
            
        } catch (error) {
            next(error)
        }
    }
}