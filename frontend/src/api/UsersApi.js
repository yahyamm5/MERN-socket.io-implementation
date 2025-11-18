import {create} from 'zustand'
import axios from 'axios'

const API_URL = "http://localhost:3553/api/v1";

axios.defaults.withCredentials = true;

export const UserAPIStore = create((set) => ({
    user: null,
    error: null,
    message: null,

    signup: async (name, password, age) => {
        set({user: null, error: null});
        try {
            const response = await axios.post(`${API_URL}/Create_New_User`, {name, password, age});
            set({user: response.data.user, message: "user created"})
        } catch (error) {
            set({error: error, message: "error in signing up "});
            console.log("error",error)
        }
    },

    send_message: async (message_text, name) => {
        set({user: true, message : `Message ${message_text} sent to ${name}`})
        try {
            const sender = await axios.post(`${API_URL}/Send_Message`, {message_text, name})
            set({message: sender.data.message, error: null})
        } catch (error) {
            set({error:error, message: "error in sending the message"})
            console.log("error",error)
        }
    }
}))