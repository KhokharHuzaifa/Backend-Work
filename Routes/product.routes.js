import express from 'express'
import productsController from '../Controllers/products.controller.js'
import { isAuthenticated , isAuthorized } from '../Middleware/auth.js'

const router = express.Router()

const product = new productsController()

router.route('/product/all').get(isAuthenticated,isAuthorized('admin'),product.getAllProducts)
router.route('/product/id').get(product.getSingleProduct)
router.route('/product/new').post(product.createProduct)
router.route('/product/update').put(product.updateProduct)
router.route('/product/delete').delete(product.deleteProduct)

export default router