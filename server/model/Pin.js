const mongoose = require('mongoose'); 


const PinSchema = new mongoose.Schema(
    {
    title: {
        type: String, 
        require: true, 
        min: 3
    }, 
    rating: {
        type: Number, 
        require: true, 
        min: 0, 
        max: 5
    }, 
    place: {
        type: String, 
        required: true
    },
    lat: {
        type: Number, 
        required: false,
    }, 
    long: {
        type: Number, 
        required: false
    }, 
},
{timestamps: true}
);

module.exports = mongoose.model("Pin", PinSchema);