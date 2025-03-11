const userModel = require("../models/userModel");

// GET USER INFO
const getUserController = async (req, res) => {
    try {
        // find user
        const user = await userModel.findById({_id:req.body.id})
        // validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:'User not Found'
            })
        }
        // hide paswword
        user.password = undefined
        //response
        res.status(500).send({
            success: true,
            message: 'User get Successfully'
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error in Get User API',
            error
        })
        
    }
    res.status(200).send("User Data");
};

module.exports = {getUserController};