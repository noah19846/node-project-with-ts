import mongoose from 'mongoose'

const schema: any = new mongoose.Schema(
  {
    name: String
  },
  { timestamps: true }
)

schema.options.toJSON = {
  virtuals: true,
  transform(doc: any, ret: any) {
    ret.id = ret._id
    delete ret._id
  }
}

export default mongoose.model('Tag', schema)
