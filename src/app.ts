import express from "express";
import * as holderController from './controllers/holderController';

const app = express();
var port = 3000;


app.get('/', holderController.rootHash);

app.listen(port, () => console.log(`Running at ${port}!`))

