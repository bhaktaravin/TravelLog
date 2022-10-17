
const router = require("express").Router();
const Pin = require("../models/Pin");

// Create a Pin
router.post("/", async (req, res) => {
  const newPin = new Pin(req.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
    console.log(savedPin);
    return;
  } catch (err) {
    res.status(500).json({ message: err.message });
    return;
  }
});

// Get all Pins
router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json(pins);
    return;
  } catch (err) {
    res.status(500).json({ message: err.message });
    return;
  }
});


//Get single Pin 
router.get("/pins/:id", async(id) => {
  try{
    const singlePin = await Pin.findOne({id});
    res.status(200).json(singlePin); 
    console.log(singlePin);
  } catch (err) {
      res.status(500).json({ message: err.message});
  }
});

module.exports = router;