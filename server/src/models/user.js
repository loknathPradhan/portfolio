const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, require: true}
},{timestamps: true})

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;