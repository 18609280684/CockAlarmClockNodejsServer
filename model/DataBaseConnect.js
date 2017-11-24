/**
 * Created by Administrator on 2017/11/23.
 */
var Sequelize = require('sequelize');

var sequelize = new Sequelize(
    'test',    //数据库名
    'root',             //用户名
    '123456',             //密码
    {
        'dialect': 'mysql',
        'host': 'localhost',
        'port': 3306
    }
);

var Users = sequelize.define(
    'users',{
        user_id:{
            //自增长id,主键,整形
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        user_name:{
            type:Sequelize.CHAR(30),
        },
        password:{
            type:Sequelize.STRING(64),
        },
        nick_name:{
            type:Sequelize.STRING(64),
        }
    }
);

// 创建表
// User.sync() 会创建表并且返回一个Promise对象
// 如果 force = true 则会把存在的表（如果users表已存在）先销毁再创建表
// 默认情况下 forse = false
var user = Users.sync({ force: false });

module.exports = Users;