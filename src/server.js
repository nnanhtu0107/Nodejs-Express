import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from './route/web';
// import connection from './configs/connectDB';
require('dotenv').config();


const app = express();
const port = process.env.PORT || 6969;

//set up view engine
configViewEngine(app);
//initwebroutes
initWebRoute(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
