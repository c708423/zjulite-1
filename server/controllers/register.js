const { mysql } = require('../qcloud')

module.exports = async ctx => {
  const body = ctx.request.body

  var zjuEmail= body.Email //读取post数据
  var randomEmailString=''  //随机生成字符串
  var identity='' //根据时间种子生成identity
  
  var register = {
    id:,
    validtime:,
    email:zjuEmail,
    identity:identity,
    randomString: randomEmailString
  }

  const data = await mysql("registerTempList").insert(register) //插入数据库 临时信息

  //
  //...该部分写邮件发送代码
  //

  ctx.state.data = data //返回状态信息
}