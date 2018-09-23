var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = require('../config/DBConnection').connectionPool;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', (req, res, next) => {
  let postData = req.body;
  if(postData.id === "" || postData.pw === ""){
  	res.send(201, {
		result: 'id or pw is blank'
	});
	return;
  }
  var sql = "SELECT * FROM student WHERE id=" + postData.id;
  pool.getConnection((err, con) => {
    if(err){
      throw err;
    }
    con.query(sql, (err, row) => {
      con.release();
      if(err){
        console.log(err);
        res.send(200, {
            result: 'error',
            status: 503
        });
        return;
      }
      if(row[0].id === req.body.id && row[0].pw === req.body.pw){
        res.send(200, {
          result : 'success',
          status : 200,
          data: {
            id: row[0].id,
            name: row[0].name,
            mail: row[0].mail,
            tel: row[0].tel
          }
        });
        return;
      }else{
        res.send(200, {
          result:"Fail",
          status: 201
        });
        return;
      }
    });
  })
})

module.exports = router;
