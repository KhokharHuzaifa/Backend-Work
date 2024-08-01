import { userModel } from "../Model/user.model.js";

export default class userController {

   async createUser(req,res,next){
        try {
            const data= req.body;
            await userModel.create(data)
            res.json({
                message:'Create User Hit'
            })
        } catch (error) {
            next(error)
        }
    }

    async getAllUser(req, res, next) {
        try {
            const data = await userModel.find();
            res.json({
                message: 'All user route hit'
            })
        } catch (err) {
            next(err)
        }
    }

    async getSingleUser(req, res, next) {
        try {
            const { id } = req.query
            const singleUser = await userModel.findById(id)
            res.json({
                message: 'Single user route hit',
            })
        } catch (error) {
            next(error)
        }
    }

    async updateUser(req, res, next) {
        try {
            const { id } = req.query
            const data = req.body
            const updatedUser = await userModel.findByIdAndUpdate(id, data)
            res.json({
                message: 'Update user route hit',
            })
        } catch (err) {
            next(err)
        }
    }

    async deleteUser(req, res, next) {
        try {
            const { id } = req.query;
            const user = await userModel.findByIdAndDelete(id)
            res.json({
                message: 'Delete user route hit',
                deletedUser: {
                    user,
                    flag: 'This user deleted'
                }
            })
        } catch (err) {
            next(err)
        }
    }
}

