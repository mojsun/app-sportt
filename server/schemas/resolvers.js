// const { AuthenticationError } = require("apollo-server-express");
// const { User } = require("../models");
// const { signToken } = require("../utils/auth");

// const resolvers = {
//   Query: {
//     //return all users
//     users: async () => {
//       return await User.find();
//     },

//     user: async (parent, args, context) => {
//       if (context.user) {
//         const user = await User.findById(context.user._id).populate({
//           path: "orders.products",
//           populate: "category",
//         });

//         user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

//         return user;
//       }

//       throw new AuthenticationError("Not logged in");
//     },
//   },

//   Mutation: {
//     // For sign up
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },

//     // Update user data
//     updateUser: async (parent, args, context) => {
//       if (context.user) {
//         return await User.findByIdAndUpdate(context.user._id, args, {
//           new: true,
//         });
//       }

//       throw new AuthenticationError("Not logged in");
//     },

//     // For login
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError("Incorrect credentials");
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError("Incorrect credentials");
//       }

//       const token = signToken(user);

//       return { token, user };
//     },
//   },
// };

// module.exports = resolvers;

const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // Return all users
    users: async () => {
      return await User.find();
    },
  },

  Mutation: {
    // Add a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },

    // Update user data
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
