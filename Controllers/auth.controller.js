import { userModel } from "../Model/user.model.js";

export default class authController {
    signUp(req,res,next){
        try {
            const data = req.body;
            res.json({
                message:'Signup Hit'
            })
            
        } catch (error) {
            next(error)
        }
    }

    Login(req,res,next){
        try {
            const data = req.body;
            res.json({
                message:'Login Hit'
            })
        } catch (error) {
            next(error)
        }
    }
}