const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name:{
        type: String,
        unique: false,
        required: true
    },
    description: {
        type: String,
        unique: false,
        required: true
    }
}, {
    timestamps: true,
})

cardSchema.statics = {
    create: function (data, cb) {
        const card = new this(data);
        card.save(cb);
    },
    get: function(query,cb) {
        this.find(query,cb);
    },
    getByName: function (query, cb) {
        this.findById(query, cb);
    },

    update: function (query , updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function (query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

const cardModel = mongoose.model('Cards', cardSchema);
module.exports = cardModel;