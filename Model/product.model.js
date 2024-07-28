import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    category:String
});

export const productModel = mongoose.model('product', productSchema);