import {StatusCodes} from "../common";
const User = require('./user')
const Role = require('./role')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require('./token')
export async function registration(req: any, res: any) {
  try {
    const {username, password} = req.body
    const candidate = await User.findOne( {username} )
    if (candidate) {
      return res.status(400).json({messages: "that user has"})
    }
    const hashPassword = bcrypt.hashSync(password, 7);
    const userRole = await Role.findOne({value: "AMIN"})
    const user = new User( {username, password: hashPassword, roles: [userRole.value]})
    await user.save()
    return  res.json({message: 'Success user'})
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
}
export async function login(req: any, res: any) {
  try {
    const {username, password} = req.body
    const user = await  User.findOne({username});
    if (!user) {
      return res.status(400).json( {messages: `User ${username} not founded`})
    }
    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
      return res.status(400).json( {messages: `password wrong`})
    }
    const token = generateAccessToken(user._id)
    return res.json({token})

  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
}
function generateAccessToken (id: string) {
  const payload = {
    id,
  }
  return jwt.sign(payload, secret, {expiresIn: "24h"})
}
export async function getUsers  (req: any, res: any) {
  try {
    res.json("server work")
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
}
