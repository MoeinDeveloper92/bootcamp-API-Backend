const Bootcamp = require("../models/Bootcamp")


//@desc     Get all the bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public => you dont need to have token to see bootcamps  
exports.getBootcamps = async (req, res, next) => {
    try {
        const allBootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            count: allBootcamps.length,
            data: allBootcamps,

        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })

    }

}


//@desc     Get a single bootcamp
//@route    GET /api/v1/bootcamp/:id
//@access   Publuc
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        if (!bootcamp) {
            return res.status(400).json({
                success: false,
            })
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}

//@desc     Create New Bootcamp
//@route    POST /api/v1/bootcamp/
//@access   Private=>you have tos end a token
exports.createBootcamp = async (req, res, next) => {
    //we need data from Client to insert data to database
    //mongoose returns a Promise
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
            success: true,
            data: bootcamp
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}

//@desc     Update Bootcamp
//@route    PUT /api/v1/bootcamp/:id
//@access   Private
exports.updateBootcamp = async (req, res, next) => {

    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!bootcamp) {
            return res.status(400).json({
                success: false
            })
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}



//@desc     Delete a single bootcamp
//@route    DELETE /api/v1/bootcamp/:id
//@access   Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        if (!bootcamp) {
            return res.status(400).json({
                success: false,
                error: "There is no bootcamp"
            })
        } else {
            await Bootcamp.findByIdAndDelete(req.params.id)
            res.status(200).json({
                success: true
            })
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}