import { productModel } from "../Model/product.model.js"

export default class productsController {

    async createProduct(req, res, next) {
        try {
            const data = req.body;
            await productModel.create(data);
            res.json({
                message: 'Product added into database successfully',
            })
        } catch (err) {
            next(err)
        }
    }

    async getAllProducts(req, res, next) {
        try {
            const data = await productModel.find();
            res.json({
                message: 'All product route hit',
                data
            })
        } catch (err) {
            next(err)
        }
    }

    async getSingleProduct(req, res, next) {
        try {
            const { id } = req.query
            const singleProduct = await productModel.findById(id)
            res.json({
                message: 'Single product route hit',
                product: singleProduct
            })
        } catch (error) {
            next(err)
        }
    }

    async updateProduct(req, res, next) {
        try {
            const { id } = req.query
            const data = req.body
            const updatedProduct = await productModel.findByIdAndUpdate(id, data)
            res.json({
                message: 'Update product route hit',
                updatedData: updatedProduct
            })
        } catch (err) {
            next(err)
        }
    }

    async deleteProduct(req, res, next) {
        try {
            const { id } = req.query;
            const prod = await productModel.findByIdAndDelete(id)
            res.json({
                message: 'Delete product route hit',
                deletedProduct: {
                    prod,
                    flag: 'This product deleted'
                }
            })
        } catch (err) {
            next(err)
        }
    }
}