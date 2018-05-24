const { mysql } = require('../qcloud')

module.exports = async ctx => {
  const body = ctx.request.body

  var identity = body.identity //读取post数据identity

  const data = await mysql("SysMessages").where({ identity }).first() //读取数据库 system信息

  ctx.state.data = data //返回信息
}