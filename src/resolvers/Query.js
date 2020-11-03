const { getUserId } = require('../utils')

function codes(parent, args, context, info) {
  //const userId = getUserId(context)
  return context.prisma.code.findMany()
}

module.exports = {
  codes,
}
