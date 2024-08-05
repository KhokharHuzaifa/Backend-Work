import { userModel } from "../Model/user.model.js";
import bcrypt from 'bcrypt'

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
            const user = req.body;

            if(!user.email) return next(new Error('Please provide Email'));
            if(!user.password) return next(new Error('Please provide Password'));

            const matchedUser = await userModel.findOne({email:user.email})
            
            if(matchedUser==null) return next(new Error('Email doesn\'t Exist'));
            
            const matchedPassword = await bcrypt.compare(user.password, matchedUser.password);

            if(!matchedPassword) return next(new Error('Password doesn\'t match'))

            res.json({
                message:'Login Successfully'
            })
            
        } catch (error) {
            next(error)
        }
    }
}