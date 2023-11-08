const expres = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const colors = require("colors")
const connectDB = require("./config/db")
//Load Env files
//this loads env variable from a .env file o process.env file, which we can work with them.
dotenv.config({
    path: "./config/config.env"
})
connectDB()

const app = expres()

//Dev login middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'))
}


//Body Parse
app.use(expres.json())
app.use(expres.urlencoded({ extended: false }))
//Routes file/ and below we mount the routers
app.use("/api/v1/bootcamps", require("./routes/bootCamp"))

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => {
    console.log(`The server is running in ${process.env.NODE_ENV} mode, on the port ${PORT}`)
})


//we want to clsoe app if we get unhandler rejection
//Handler unhandlerd or promise rejection
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`)
    //Close server and exit process
    server.close(() => {
        process.exit(1)
    })
})