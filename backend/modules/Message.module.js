const mongoose = require("mongoose")


const MessagesSchema = new mongoose.Schema({

    message_text: {
        type: String,
        required: true,
    },
    Send_To: {
        type: Array,
        required: true,
    },
    Reciver_id:{
        type: String,
        ref: "User",
    },
},
{
    timestamps: true
}
)

const Message = mongoose.model('Message', MessagesSchema)


module.exports = Message

