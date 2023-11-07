//@desc     Get all the bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public => you dont need to have token to see bootcamps  
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: "Display All the bootcamps",
    })
}


//@desc     Get a single bootcamp
//@route    GET /api/v1/bootcamp/:id
//@access   Publuc
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Display Bootcamp ${req.params.id}`
    })
}

//@desc     Create New Bootcamp
//@route    POST /api/v1/bootcamp/
//@access   Private=>you have tos end a token
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Creaet New Bootcamp`
    })
}

//@desc     Update Bootcamp
//@route    PUT /api/v1/bootcamp/:id
//@access   Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update Bootcamp ${req.params.id}`
    })
}



//@desc     Delete a single bootcamp
//@route    DELETE /api/v1/bootcamp/:id
//@access   Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `delete Bootcamp ${req.params.id}`
    })
}