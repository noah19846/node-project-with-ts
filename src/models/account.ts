import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      set(value: string) {
        return bcrypt.hashSync(value, 10)
      }
    }
  },
  { timestamps: true }
)

export default mongoose.model('Account', schema)
