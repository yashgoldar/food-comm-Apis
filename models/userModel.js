const mongoose = require('mongoose');

//schema
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'username is required']
    },
    email: {
        type: String,
        required: [true, 'email is requird'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    address: {
        type: Array,
    },
    phone: {
        type: String,
        required: [true, 'phone number is required']
    },
    usertype: {
        type: String,
        required: [true, 'user type is required'],
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver']
    },
    profile: {
        type: String,
        default: 'https://www.google.com/imgres?q=profile&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fblue-circle-with-white-user_78370-4707.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fuser-profile&docid=ZyFeK2BRducuvM&tbnid=ZzhEBaHQM02woM&vet=12ahUKEwjkgZbojOyLAxW9TmwGHfqyH2YQM3oECGcQAA..i&w=626&h=626&hcb=2&ved=2ahUKEwjkgZbojOyLAxW9TmwGHfqyH2YQM3oECGcQAA'
    }
}, { timestamps: true })

//export
module.exports = mongoose.model('User', UserSchema)