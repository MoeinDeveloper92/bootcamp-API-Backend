const express = require("express")
const router = express.Router()
const { getBootcamps, getBootcamp, deleteBootcamp, updateBootcamp, createBootcamp } = require("../controller/bootcampController")

router.route("/")
    .get(getBootcamps)
    .post(createBootcamp)

router.route("/:id")
    .put(updateBootcamp)
    .delete(deleteBootcamp)
    .get(getBootcamp)

module.exports = router