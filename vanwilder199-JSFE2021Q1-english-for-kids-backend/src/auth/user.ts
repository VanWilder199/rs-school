import {model, Schema} from "mongoose";
const  User = new Schema({
  username: {type: String, unique: true, required:true},
  password: {type: String, required: true}
})
module.exports = model('User', User)
