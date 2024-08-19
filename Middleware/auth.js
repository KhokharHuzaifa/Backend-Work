import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
    try {
        const { auth_token } = req.cookies;
        if (!auth_token) return next(new Error('Session Expired, Login to use this resource'))
        const decodedToken = jwt.verify(auth_token, process.env.JWT_SECRET);
        req.user = decodedToken
        next()
    } catch (error) {
        next(error)
    }
}

export const isAuthorized = (...roles) => {
    return (req,res,next)=> {
       try {
        if(!roles.includes(req.user.role)){
            return next(new Error('Un Authorized user'))
        } 
        next()
       } catch (error) {
        next(error)
       }
    }
}