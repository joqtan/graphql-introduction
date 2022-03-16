import mongoose from 'mongoose'

export const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost/mongographql', {
      useNewUrlParser: true,
    })
    console.log('Connected to database!')
  } catch (e) {
    console.log(e)
  }
}
