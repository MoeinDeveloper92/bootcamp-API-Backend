const mongoose = require("mongoose")


//Connect to database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

//we can add global unhandled rejection instad of above try catch

// {
//     useNewUrlParser: true,
//         useCreateIndex: true,
//             useFindAndModify: fakse
// }

module.exports = connectDB