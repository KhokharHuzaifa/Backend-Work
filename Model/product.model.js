import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    title:{
        type:String,
        minLength:[5,'Title at least 5 characters required'],
        maxLength:[100,'Title not exceed 50 characters above'],
        required:[true,'Title is required'],
        unique:true
    },
    price:{
        type:Number,
        min:[10,'Minimum price at least 10'],
        max:[10000,'Max price is 10k'],
        required:[true,'Price is required']
    },
    description: String,
    category:{
        type:String,
        enum:['men\'s clothing']
    }
});

export const productModel = mongoose.model('product', productSchema);