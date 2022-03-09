const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { signupValidation, loginValidation } = require("../models/validation");

router.post("/signup", async (req, res) => {
  // res.send("Works");

  //VALIDATE USER DATA
  const { error } = signupValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checks if username is the same
  const nameExists = await User.findOne({
    name: req.body.name,
  });
  if (nameExists) return res.status(400).send("Username already exists!");

  //checks if email already exists
  const emailExists = await User.findOne({
    email: req.body.email,
  });
  if (emailExists) return res.status(400).send("Email already exists!");

  //Encrpyt Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //creates a new user
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password: hashPassword });
    res.status(201).json({ user: user.id });
  } catch (err) {
    console.log(err);
    res.status(400).send("error");
  }
});

//login
router.post("/login", async (req, res) => {
  //Validate Entered Data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if Email is in db
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) return res.status(400).send("Email or password does not exists!");

  //check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid Password");

  //jwt-tokens
  const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN);
  res.header("auth-token", token).send(token);

  //res.send("User Logged In");
});

module.exports = router;
