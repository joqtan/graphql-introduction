import { tasks } from './sample'
import User from './models/users'

export const resolvers = {
  Query: {
    hello: () => 'hello world on graphql',

    greet: (root, { name }) => `Hello ${name}!!`,
    tasks: () => tasks,
    users: async () => await User.find(),
  },

  Mutation: {
    createTask: (_, { input }) => {
      input._id = tasks.length
      tasks.push(input)
      return input
    },
    createUser: async (_, { input }) => {
      const newUser = new User(input)
      await newUser.save()
      return newUser
    },
    deleteUser: async (_, { _id }) => await User.findByIdAndDelete(_id),
    updateUser: async (_, { _id, input }) =>
      await User.findByIdAndUpdate(_id, input, { new: true }),
  },
}
