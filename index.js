import express from "express";

import Connection from "./database/db.js";
import routes from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
app.use('/', routes);

Connection();

app.listen(8000, ()=>{console.log('server is running')})