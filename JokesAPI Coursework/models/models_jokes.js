const mongoose = require("mongoose");


const Joke = new mongoose.Schema({
    type: {
        type: Number,
        required: true
    },

    setup: {
        type: String,
        required: true
    },

    punchline: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model("Joke", Joke)