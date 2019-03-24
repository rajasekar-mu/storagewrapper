var express = require('express');
var router = express.Router();
const storage = require('../lib/node-persist');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add-mock-data', async (req, res, next) => {
    await storage.put('a', 4);
    await storage.put('b', 414);
    res.json({status:200,message:'Stored successfully'});
});

router.get('/get-mock-data', async (req, res, next) => {
  	let a = await storage.get('a');
    let b = await storage.get('b');
    if(a && b){
      var res_data = {status:200,data:{a:a,b:b},message:'Retrieve successfully'}
    }else{
      var res_data = {status:400,message:'No data available'}
    }
    res.json(res_data);
});

router.get('/delete-mock-data', async (req, res, next) => {
  	//await storage.clear();
    await storage.del('a');
    await storage.del('b');
    res.json({status:200,message:'Stored data successfully removed'});
});

router.get('/add-bulk-mock-data', async (req, res, next) => {
    await storage.batchPut([{x:51},{y:71}]);
    res.json({status:200,message:'Stored successfully'});
});

router.get('/get-batch-mock-data', async (req, res, next) => {
  	let a = await storage.get('x');
    let b = await storage.get('y');
    if(a && b){
      var res_data = {status:200,data:{a:a,b:b},message:'Retrieve successfully'}
    }else{
      var res_data = {status:400,message:'No data available'}
    }
    res.json(res_data);
});


module.exports = router;
