import { Router } from 'express';
import {getUsers, login, registration} from "./authController";
const authrouter = Router();
authrouter.post('/login', login)
authrouter.post('/registration', registration)
authrouter.get ('/users', getUsers);
export default authrouter;
