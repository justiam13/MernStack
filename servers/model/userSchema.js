//mongodb  users schema //capable of storing data in my mongoDb
//this is my Mongodb Schema /model/userSchema.js
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
module.exports = mongoose.model('User', userSchema);
