const jsonwebtoken = require("jsonwebtoken");
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const JWT = require('jsonwebtoken');
// REGISTER
const registerController = async (req, res) => {
    try {
        const { userName, email, password, phone, address } = req.body
        //validation
        if (!userName || !email || !password || !phone || !address) {
            return res.status(500).send({
                success: false,
                message: "All Fields Are Required"
            })
        }
        //check user
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: "User Already Exists"
            })
        }
        //hashing password
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //create new user
        const user = await userModel.create({ 
            userName,
            email, 
            password:hashedPassword,
            phone, 
            address })
        res.status(201).send({
            success: true,
            message: "Successfully Registered"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Register API", error
        });
    }
};

// LOGIN
const loginController = async (req, res) => {
    try {
        const {email, password} = req.body
        //validation
        if(!email || !password){
            return res.status(500).send({
                success: false,
                message: "Please Provide Email OR Password"
            })
        }
        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success: false,
                message: "User Not Found"
            })
        }
        //check user password || compare password
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(500).send({
                success:false,
                message:'Invalid credentials'
            })
        }
         // token
         const token = JWT.sign({id:user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        user.password = undefined;
        res.send(200).send({
            success: true,
            message: "Successfully Logged In",
            token,
            user,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Login API", error
        })
        
    }
};

module.exports = { registerController, loginController };