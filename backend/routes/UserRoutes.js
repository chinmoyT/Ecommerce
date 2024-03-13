const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single user
router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});

// Create a new user
router.post('/register', async (req, res) => {
  const {username, email, password} = req.body
  try {
    
    const existingUser = await User.findOne({email})
    if(existingUser){
      return res.status(400).json({message: 'Email already exists'})
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({
      username,
      email,
      password: hashedPassword,
      cart: [] //empty cart
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Delete a user
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}


//login user
router.post('/login', async (req,res)=> {
  const {email, password} = req.body;
  try{
    const user = await User.findOne({email})
    if(!user){
      return res.status(404).json({message:'User not found'})
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if(!isPasswordMatch){
      return res.status(401).json({message: 'Invalid password'})
    }

    //Generate a token
     
    const token = jwt.sign({userId: user._id ,email:user.email}, 'secret-key' ,{expiresIn: '1h'})
    //Return token
    res.status(200).json({token})

  }
  catch(error){
    res.status(500).json({message: 'Internal server error'})
  }
})

module.exports = router;
