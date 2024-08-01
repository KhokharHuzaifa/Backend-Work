import authController from "../Controllers/auth.controller.js";
import express from 'express'


const auth = new authController();

const router = express.Router();

router.route('/auth/register').post(auth.signUp)
router.route('/auth/login').post(auth.Login)

export default router