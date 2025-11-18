const express = require("express")
const Routes = express.Router()
const Auths = require("../controllers/User.controller")

Routes.post('/Create_New_User', Auths.CreateNewUser);
Routes.post('/Login_User', Auths.Login);
Routes.post('/logout', Auths.logout);
Routes.post('/Send_Message', Auths.SendMessage);


module.exports = Routes