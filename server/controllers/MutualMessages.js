const { mysql } = require('../qcloud')

module.exports = async ctx => {
  const body = ctx.request.body

  var identity = body.identity //读取post数据identity

  const data = await mysql("MutualMessages").where({ identity }).first() //读取数据库 MutualMessages信息

  ctx.state.data = data //返回信息
}