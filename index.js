import express from "express";

import Connection from "./database/db.js";


const app = express();

Connection();

app.listen(8000, ()=>{console.log('server is running')})