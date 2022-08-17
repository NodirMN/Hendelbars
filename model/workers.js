const {Schema, model} = require('mongoose')

const workers = new Schema({
    bolim: String,
    ism: String,
    familiya: String,
    photo:String,
});

module.exports = model('Workers', workers)