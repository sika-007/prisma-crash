import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] }); // Use one instance of this in your code to avoid creating to many concurrent database connections

// You can log raw sql queries to the console by passing them to the Prisma Client class instance

async function main() {
  await prisma.user.deleteMany();
  const users = await prisma.user.createMany({
    data: [
      {
        name: "nsikak",
        email: "nsikak@test.com",
        age: 27,
        largeNumber: 998198291,
      },
      {
        name: "Edima",
        email: "eddy123@gmail.com",
        age: 90,
        largeNumber: 984798379,
      },
    ],
  });

  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
