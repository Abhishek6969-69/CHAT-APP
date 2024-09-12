import express from 'express'
import authmiddleware from '../middleware/authmiddleware.js'
import {handlemessage} from '../controller/handalmessage.js';
import { handlegetmessage } from '../controller/handalmessage.js';
const mroute=express.Router();
console.log("jii")
mroute.post('/send/:id',authmiddleware,handlemessage);
mroute.get('/:id',authmiddleware,handlegetmessage);
export default mroute;