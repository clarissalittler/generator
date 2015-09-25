var express = require('express');
var router = express.Router();
// http://expressjs.com/4x/api.html#router
// this allows us to set routes as router.METHOD(path, callback)
// and they can be installed to a relative path using app.use at the level of the app.js file

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
