import express from 'express';
import 'dotenv/config.js';
import bodyParser from 'body-parser';
import connectMongoDB from './connect.js';
import Router  from 'express';

const app = express();
const port = process.env.PORT || 3000;
