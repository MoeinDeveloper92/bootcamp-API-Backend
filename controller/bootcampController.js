const getAllBootcamps = (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Display all the bootcamps"
    })
}

const getBootcamp = (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Display Bootcamp ${req.params.id}`
    })
}

const createBootcamp = (req, res, next) => {
    res.status(201).json({
        success: true,
        msg: `Create New Bootcamp`
    })
}

const updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update Bootcamp ${req.params.id}`
    })
}

const deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        sucess: true,
        msg: `Delete Bootcamp ${req.params.id}`
    })
}

module.exports = {
    getAllBootcamps,
    getBootcamp,
    updateBootcamp,
    deleteBootcamp,
    createBootcamp
}