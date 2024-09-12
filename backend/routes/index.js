import express from 'express';
import router from './user.js';
import mroute from './messagess.js';
const mainrouter=express.Router();
mainrouter.use('/user',router);
mainrouter.use('/message',mroute);
export default mainrouter