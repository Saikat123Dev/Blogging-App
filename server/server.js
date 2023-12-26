import express from "express";
import mongoose from 'mongoose';
const server = express();
let PORT = 3000;
server.listen(PORT , ()=> {
    console.log('listening on port --> '+ PORT)
});