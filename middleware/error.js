const ErrorResponse = require("../utils/errorResponse")

const errorHandler = (err, req, res, next) => {
    //we doint want tio send separate response in evert errorf
    //make a copy of error
    //spread opeartor
    let error = { ...err }
    error.message = err.message
    console.log(err.name)
    // we dont want to directly change the err
    //Mongoose bad ObjectId
    if (err.name === "CastError") {
        //we prepare weverything to send to ErrorRespnse Class
        const message = `Resource not found with the ${err.kind} of ${err.value}`
        error = new ErrorResponse(message, 404)
    }

    //Mongoose Duplicates Key
    if (err.code === 11000) {
        const message = `Duplicates field value entered.`
        //this is like throw new Error("asdjnakjs")
        error = new ErrorResponse(message, 400)
    }

    //Mongoose Validation Error
    //wehn you put no name or no emaiul or no required fields
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(val => val.message)
        error = new ErrorResponse(message, 400)
    }


    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    })
}




module.exports = errorHandler

//since this is middleware we need to run it thorugh app.use
//whenever you want to see what's going on in your eerror, just console.log(err) to see what erro entails