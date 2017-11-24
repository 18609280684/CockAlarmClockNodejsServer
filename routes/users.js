var express = require('express');
var router = express.Router();
var URL = require('url');
var User = require('../model/DataBaseConnect');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//用户注册(数据表增)
router.get('/Register',function(req,res,next){
  var params = URL.parse(req.url,true).query;
  //create() - 创建保存新实例(插入一条数据)  bulkCreate() - 创建多条记录
  User.create({
    user_name:params.username,
    password:params.password,
    nick_name:params.nickname,
  }).
  then(function(result){
    console.log('The solution is: ', result);
    var response;
    if (result)
    {
      response = {status:true};
    }else{
      response = {status:false};
    }
    res.send(JSON.stringify(response));
  }).
  catch();
});

//数据表删除 删除用户
router.get('/DeleteUser',function(req,res,next){
  var params = URL.parse(req.url,true).query;
  User.destroy({where:{user_name:params.username}}).
  then(function(result){
    console.log('The solution is: ', result);
  }).
  catch();
});

//用户信息修改 数据表改
  router.get('/ChangeUserInfo',function(req,res,next){
  var params = URL.parse(req.url,true).query;
  User.update({
      user_name:params.changeUserName,
  },{
    where:{user_name:params.username}
  }).
      then(function(result){
    console.log('The solution is: ', result);
  }).
      catch();
});

//数据表查询，用户登录
router.get('/Login',function(req,res,next){
  var params = URL.parse(req.url,true).query;
  //User.findAll().
  //    then(function(msgs){
  //  console.log('The solution is: ', msgs);
  //});
  //findAll() - 查询多条数据  findById() - 通过Id查询单条数据  findOne() - 通过单条数据
  User.findOne({where:{user_name:params.username}}).
        then(function (result){
          console.log('The solution is: ', result);
        }).
        catch();

  //var response = {status:1,data:user};
  //res.send(JSON.stringify(response));
});

module.exports = router;
