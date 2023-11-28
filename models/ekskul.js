const mongoose = require('mongoose')

const EkskulSchema = new mongoose.Schema({

    ekskul: {
        type: String,
        required: [true, 'Silahkan isi minat'],
    },

    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: true
    },

    kelas: {
        type: String,
        required: [true, 'Silahkan tuliskan kelas'],
    },

    gender: {
        type: String,
        required: [true, 'Silahkan tuliskan gender'],
    },
    
    domisili: {
        type: String,
        required: [true, 'Silahkan sebutkan domisili'],
    },
})

module.exports = mongoose.model('Ekskul', EkskulSchema)