export const error = (err, req, res, next) => {

    // FOR CUSTOM NODE.JS ERROR
    let error = { ...err }
    error.message = err.message;
    // FOR CUSTOM NODE.JS ERROR


    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message)
        res.json({
            key: message
        })
    }

    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        res.json({
            key: message
        })
    }

    if (err.name === "CastError") {
        const message = `Invalid ${err.path} found`
        res.json({
            key: message
        })
    }
    
    // FOR CUSTOM NODE.JS ERROR
    res.json({
        message: error.message || 'Something went wrong'
    })
    // FOR CUSTOM NODE.JS ERROR

}