

// !!!!!! rename the seed.js file to seed.cjs


import { PrismaClient } from '@prisma/client'
import * as bcrypt from "bcrypt";
const prisma = new PrismaClient()
async function main() {

  // const password = await bcrypt.hash("nicePassword", 4);
    // to create a user
      // await prisma.user.create({
      //   data : {
      //     id: 3,
      //     FirstName: "Jaswanth",
      //     LastName: "raja",
      //     UserName: "JP68",
      //     email: "jpinnepu123@gmail.com",
      //     password,
      //   },
      // });
    // to find a user
    //console.log(await prisma.user.findMany());

    // to check if a user is passing the form
    const data = await prisma.user.findFirst({where: {
      UserName: "JP68",
    }}); 
    console.log(data);
    const match = await bcrypt.compare("nicePassword",data!.password);
    if (match) {
      console.log("match found!");
    } else {
      console.log("match not found!");
    }
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