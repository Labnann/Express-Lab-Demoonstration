const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    shirt: {
        type: String,
        required: true,
    },
     paid: {
        type: Boolean,
        default:false
    },
    selected: {
        type: Boolean,
        default:false
    },

    institution:{
      type: String,
      required: true
    },



    date: {
        type: Date,
        default: Date.now,
    }
});

const MathOlympiadUser = mongoose.model("MathOlympiadUser", UserSchema);
module.exports = MathOlympiadUser;
