const expres = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
//Load Env files
//this loads env variable from a .env file o process.env file, which we can work with them.
dotenv.config({
    path: "./config/config.env"
})

const app = expres()

//Dev login middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'))
}

//Routes file/ and below we mount the routers
app.use("/api/v1/bootcamps", require("./routes/bootCamp"))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`The server is running in ${process.env.NODE_ENV} mode, on the port ${PORT}`)
})