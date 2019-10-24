const express = require('express');
const router = express.Router();
const  bcrypt = require('bcryptjs');
const users = require("../models/users");

/* GET users listing. */
router.get('/login', async(req, res, next) => {
  res.render('template', {
    locals: {
      title: "Login",
      isLoggedIn: req.session.is_logged_in

    },
    partials: {
      partial: "partial-login"
    }
  });
});

router.get('/signup', async(req, res, next) => {
  res.render('template', {
    locals: {
      title: "Signup",
      isLoggedIn: req.session.is_logged_in
    },
    partials: {
      partial: "partial-signup"
    }
  });
});

router.post("/signup", async (req, res, next) => {
  console.log(req.body);
  const { first_name, last_name, email } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const user = new users (first_name, last_name, email, hash);

  const addUser = await user.save();
  console.log("Was user added? ",addUser)

  res.status(200).redirect("/users/login"); 
  if(addUser) {
} else {
    res.status(500);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password} = req.body;

  const user = new users(null, null, email, password);

  const response = await user.login();
  console.log(response)
  if (!!response.isValid){
    const {id, first_name, last_name } = response;
    req.session.is_logged_in = true;
    req.session.first_name = first_name;
    req.session.last_name = last_name;
    req.session.user = id;
    res.send(200).redirect("/");
  }
});

router.get("/logout", (req, res, next) => {

  req.session.destroy();
  res.status(200).redirect('/');
  });

module.exports = router;