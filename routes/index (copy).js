var express = require('express');
var router = express.Router();
const storage = require('node-persist');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/counter', async (req, res, next) => {
  await storage.init( /* options ... */ );

await storage.setItem('name','raja');
await storage.setItem('age','18');
console.log(await storage.getItem('name'));

    res.render('index', { title: 'counter' });
});

router.get('/counter-list', async (req, res, next) => {
await storage.init( /* options ... */ );
  let value = await storage.getItem('name');
  console.log(value);
  res.render('index', { title: 'counter' });
});




module.exports = router;
