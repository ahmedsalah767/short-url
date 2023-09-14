const mongoose = require('mongoose');
const shortId = require("shortid");

const UrlSchema = new mongoose.Schema({
    url: String,
    generatedUrl: {
        type: String,
        unique: true,
        default: shortId.generate
    },
    clicks: {
      type: Number,
      defualt: 0,
    }

})



const Url = mongoose.model('Url', UrlSchema)

module.exports = Url