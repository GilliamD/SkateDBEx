var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', async(req, res, next) => {
  res.render('template', {
    locals: {
      title: "Login"
    },
    partials: {
      partial: "partial-login"
    }
  });
});

router.get('/signup', async(req, res, next) => {
  res.render('template', {
    locals: {
      title: "Signup"
    },
    partials: {
      partial: "partial-sign-up"
    }
  });
});

router.post("sign-up", async (req, res, next) => {
  console.log(req.body);
  res.send(200).redirect("/");
})

router.post("login", async (req, res, next) => {
  console.log(req.body);
  res.send(200).redirect("/");
})

module.exports = router;
