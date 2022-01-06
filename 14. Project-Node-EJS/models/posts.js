const mongoose = require('mongoose');
const Postschema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    },

});



const Postmodel = mongoose.model("Postmodel", Postschema);

module.exports = Postmodel;