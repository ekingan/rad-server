const { PrismaClient } = require("@prisma/client")
const { data } = require('./data/seed')

const prisma = new PrismaClient()

async function main() {
  for (let item of data) {
    await prisma.code.create({
      data: item
    })
  }
  const allCodes = await prisma.code.findMany()
  console.log(allCodes)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
