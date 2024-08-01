import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    firstname:{
        type:String,
        minLength:[3,'FirstName must greater than 3 characters'],
        maxLength:[15,'FirstName less than 15 characters'],
        required:[true,'FirstName is required']
    },
    lastname:{
        type:String,
        minLength:[3,'LastName must greater than 3 characters'],
        maxLength:[15,'LastName less than 15 characters'],
        required:[true,'LastName is required']
    },
    username:{
        type:String,
        minLength:[3,'UserName must greater than 3 characters'],
        maxLength:[20,'UserName less than 20 characters'],
        required:[true,'LastName is required'],
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:[true,'Email is required']
    },
    phonenumber:{
        type:String,
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    avatar:{
        type:String
    },
    roles:{
        type:String,
        default:'user',
        enum:['user','moderator','admin']
    }
})

export const userModel = mongoose.model('user', userSchema);


