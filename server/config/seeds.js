// const db = require("./connection");
// const { User } = require("../models");

// db.once("open", async () => {
//   //  Seed user data
//   await User.deleteMany();

//   await User.create({
//     firstName: "Shohei",
//     lastName: "Mochizuki",
//     email: "smochizuki@gmail.com",
//     password: "password",
//   });

//   await User.create({
//     firstName: "Test",
//     lastName: "Test",
//     email: "test@gmail.com",
//     password: "password",
//   });

//   console.log("users seeded");

//   process.exit();
// });

const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async () => {
  //  Seed user data
  await User.deleteMany();

  await User.create({
    firstName: "Shohei",
    lastName: "Mochizuki",
    email: "smochizuki@gmail.com",
    password: "password",
    phone: "4165547673",
    category: "Yoga",
    experience: "5",
    optional: "Hi",
  });

  await User.create({
    firstName: "Test",
    lastName: "Test",
    email: "test@gmail.com",
    password: "password",
    phone: "4168796567",
    category: "Fitness",
    experience: "3",
    optional: "hey",
  });

  console.log("users seeded");

  process.exit();
});
