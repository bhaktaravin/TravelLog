const express = require('express'); 
const cors = require('cors'); 
const mongoose = require("mongoose");
require('dotenv').config({ path: "./config.env"}); 
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const app = express(); 
const port = 5000; 

app.use(cors()); 

app.use(express.json()); 

if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

// Connect to mongoose
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log("Connected to mongoDB!");
  })
  .catch((err) => {
    console.log(err);
  })

// Use routes
app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
