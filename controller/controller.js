const User = require('../model/user.model');

exports.createfunc =async (req, res) => {
try {    
    const { username, email ,password} = req.body;
    const Creted_user = await User.findOne({email: email});
    if(Creted_user){
        return res.status(400).json({error: "Email is already taken"});
    }
    const createdUser = await User.create({username, email, password});
    return res.status(201).json({message: "User created successfully", user: createdUser});
} catch (error) {
        console.error("Error creating user:", error);
        return  res.status(500).json({error: "Server Error", details: error.message});
}
};