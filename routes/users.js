const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
// const { check, validationResult } = require('express-validator/check');
const { check, validationResult } = require('express-validator');

const User = require('../models/Users');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valie email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });
      // check whether the email has been registered
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name: name,
        email: email,
        password: password,
      });
      // encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // save on db
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      // gen token & send to client
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
