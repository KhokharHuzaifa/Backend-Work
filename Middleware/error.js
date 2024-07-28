export const error = (err,req,res,next)=>{

    if(err.name==="ValidationError"){
        const message = Object.values(err.errors).map((val)=>val.message)
        res.json({
            key: message
        })
    }

    if(err.code==11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        res.json({
            key: message
        })
    }

    if(err.name==="CastError"){
        const message = `Invalid ${err.path} found`
        res.json({
            key: message
        })
    }

}