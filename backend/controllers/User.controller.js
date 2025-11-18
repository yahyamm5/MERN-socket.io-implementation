const User = require('../modules/Users.module.js')
const Message = require('../modules/Message.module.js');
const  bcrypt = require("bcryptjs");
const generateToken = require('../lib/uitls.js');
    
const CreateNewUser = async (req,res) => {
    const {name, age, password} = req.body;

    try {

        if(!name || !age || !password) {
            res.status(404).json({success: false, message:"all fields are required"})
            console.log("all fields are required");
        }

        if (password.length < 6) {
            return res.status(400).json({success: false, message:"password must be at least 6 characters"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const new_user = new User({
            name: name,
            password: hashedPassword,
            age: age
        })

        await new_user.save();

        res.status(201).json({
            success: true,
            message: "new User created successfully",
            user: {
                ...new_user.doc
            }
         })

    } catch (error) {
        res.status(404).json({success: false, message: "error in creating the new user"});
        return console.log("error in creating new user", error);
    } 
}

const Login = async (req,res) => {
    const {name, password} = req.body;

    if (!name || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const userAleardyexist = await User.findOne({name})
        if(!userAleardyexist){
            console.log("Error in Login: user does not exist");
            return res.status(404).json({success: false, message: "user does not exist"});
        }

        const ComperPassword = await bcrypt.compare(password, userAleardyexist.password);
        if(!ComperPassword){
            return res.status(400).json({success: false, message:"password is invalide"})
        } 

        generateToken(userAleardyexist._id,res);

        return res.status(200).json({message: "user found",
            username:userAleardyexist.name
        })

    } catch (error) {
        console.log("Error in the login: ", error);
        return res.status(500).json({message:"error in the server"})
    }
}

const logout = (req, res) => {
    try {
        res.clearCookie("jwt") // elete the cookie that has been set
        res.status(200).json({success:true, message:"Logged out Successfully"});
    } catch (error) {
        console.log("Error in loginout:",error)
        res.status(500).json({message: "error in loginout"});
    }
}


const SendMessage = async (req,res) => {

    const {message_text, name} = req.body;

    try {

        if(!message_text || !name) {
            res.status(404).json({success: false, message:"all fields are required"})
            console.log("all fields are required")
        }

        const User_Send_To = await User.findOne({ name })

        if(!User_Send_To){
            res.status(402).json({success: false, message: "User you want to send the message to does not exist"})
            return console.log("error in sending message: user to send does not exist")
        }

        const new_message = new Message({
            message_text: message_text,
            Send_To: User_Send_To,
            Reciver_id: User_Send_To._id.toString()
        })

        new_message.save()

        res.status(201).json({success: true, message: `message : " ${new_message.message_text} " sent to ${User_Send_To.name} reciver id: ${User_Send_To._id}`});

    } catch (error) {
        res.status(404).json({success: false, message: "error in sending the message"})
        return console.log("error in sending the message :",error)
    }
}




module.exports = {CreateNewUser, SendMessage, Login, logout};