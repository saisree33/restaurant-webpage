
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
    },
    calCount: {
        type: Number,
    },
    itemPrice: {
        type: Number,
    },
    itemCategory: {
        type: String
    }
});

const Item =  mongoose.model("items", ItemSchema);
module.exports = Item; 