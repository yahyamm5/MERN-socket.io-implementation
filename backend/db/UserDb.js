const mongoose = require("mongoose")

const UserDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.URI)
        console.log(`Userdb Connected ${connect.connection.host} `)
    } catch (error) {
        console.log("error in UserDb: ",error)
    }
}

module.exports = UserDB

// yahiamajdi2004

// bTMCtGvjcAXBUuxw