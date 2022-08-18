const express = require('express'); 
const mongoose = require('mongoose');
const app = express(); 
require('dotenv').config({ path: "./config.env"}); 

const cors = require('cors'); 
app.use(cors()); 
const pinRoute = require("./routes/pins");

app.use(express.json()); 

mongoose 
.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true
})
.then(() => {
    console.log("Connected..."); 
})
.catch((err) => console.log(err));


app.use("/api/pins", pinRoute); 

app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}`);
})