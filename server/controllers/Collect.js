const { mysql } = require('../qcloud')

const list = async ctx => {
  const body = ctx.request.body

  var identity = body.identity //读取post数据identity

  const data = await mysql("collectmessage").where({ identity }) //读取数据库 
  //console.log(data)
  ctx.state.data = data //返回信息
} 

const add = async ctx => {
  const body = ctx.request.body

  var useridentity = body.useridentity //读取post数据identity
  var infoidentity = body.infoidentity

  var collectinfo = {
    time:,
    useridentity: useridentity,
    infoidentity: infoidentity
  }
  const data = await mysql("collectmessage").insert({collectinfo}) //添加

  ctx.state.data = data //返回信息
} 

const mydelete = async ctx => {
  const body = ctx.request.body

  var useridentity = body.useridentity //读取post数据identity
  var infoidentity = body.infoidentity

  const data = await mysql("collectmessage").del().where({ identity }).first() //删除

  ctx.state.data = data //返回信息
} 

//暴露如下三个接口
module.exports = { 
  list,
  add,
  mydelete
}