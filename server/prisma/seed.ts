import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    // already installed bcrypt now just run the hash and add to database.
}
main()

  .then(async () => {

    await prisma.$disconnect()

  })

  .catch(async (e) => {

    console.error(e)

    await prisma.$disconnect()

    process.exit(1)

  })