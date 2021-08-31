/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import categories from './category/router';
import items from './item/router';
import authrouter from "./auth/authrouter";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const publicPath = path.resolve(__dirname, '../root');
const indexPath = path.resolve(__dirname, '../root/index.html');
app.use(/^(?!\/api\/)/, express.static(publicPath));
app.use(/^(?!\/api\/)/, (req, res) => {
  res.sendFile(indexPath);
});
app.use(express.json())
app.use('/api/categories', categories);
app.use('/api/items', items);
app.use('/api/auth',  authrouter);
const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://auth:auth@cluster0.ysfyo.mongodb.net/auth?retryWrites=true&w=majority')
    app.listen(3000, () => console.log('Server started on http://localhost:3000'));
  } catch (e) {
    console.log(e);
  }
};
start();


