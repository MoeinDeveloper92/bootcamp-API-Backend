const mongoose = require("mongoose")

//This will be a pretty hefty model
const BootcampSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        unique: true,
        trim: true,
        maxlength: [50, "Name can not be more than 50 characters."]
    },
    slug: String,
    description: {
        type: String,
        required: [true, "Please add description"],
        maxlength: [50, "Description cannot be more than 50 Characters"]
    },
    website: {
        type: String,
        match: [
            /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
            "Please use a valid url with https or http"
        ]
    },
    phone: {
        type: String,
        maxlength: [20, "phone number cannot be longer thatn 20 characters"]
    },
    email: {
        type: String,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please add a valid email"
        ]
    },
    //this is an address that is send to the server from the client
    address: {
        type: String,
        required: [true, "Please add an address"]
    },
    location: {
        //GeoJSON point
        type: {
            type: String,
            enum: ["Point"],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    careers: {
        //Array of Strings
        type: [String],
        required: true,
        //tnum means theses are only available values that we can have
        enum: [
            "Web Development",
            "Mobile Development",
            "UI/UX",
            "Data Science",
            "Business",
            "Other"
        ]
    },
    averageRating: {
        type: Number,
        min: [1, "Rating must be at least 1"],
        max: [10, "Rating can not be more than 10"]
    },
    averageCost: {
        type: Number,
    },
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Bootcamp", BootcampSchema)