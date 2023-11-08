const Bootcamp = require("../models/Bootcamp")
const ErrorResponse = require("../utils/errorResponse")
const asyncHandler = require("../middleware/async")


//@desc     Get all the bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public => you dont need to have token to see bootcamps  
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const allBootcamps = await Bootcamp.find();
    res.status(200).json({
        success: true,
        count: allBootcamps.length,
        data: allBootcamps,

    })
})


//@desc     Get a single bootcamp
//@route    GET /api/v1/bootcamp/:id
//@access   Publuc
exports.getBootcamp = asyncHandler(async (req, res, next) => {

    const bootcamp = await Bootcamp.findById(req.params.id)
    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamo not found with id of ${req.params.id}`, 404))
    }
    res.status(200).json({
        success: true,
        data: bootcamp
    })
})

//@desc     Create New Bootcamp
//@route    POST /api/v1/bootcamp/
//@access   Private=>you have tos end a token
exports.createBootcamp = asyncHandler(async (req, res, next) => {
    //we need data from Client to insert data to database
    //mongoose returns a Promise

    const bootcamp = await Bootcamp.create(req.body)
    res.status(201).json({
        success: true,
        data: bootcamp
    })
})

//@desc     Update Bootcamp
//@route    PUT /api/v1/bootcamp/:id
//@access   Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {

    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamo not found with id of ${req.params.id}`, 404))
    }

    res.status(200).json({
        success: true,
        data: bootcamp
    })
})



//@desc     Delete a single bootcamp
//@route    DELETE /api/v1/bootcamp/:id
//@access   Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id)
    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamo not found with id of ${req.params.id}`, 404))
    } else {
        await Bootcamp.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true
        })
    }
})