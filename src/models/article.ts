import mongoose from 'mongoose'

const schema: any = new mongoose.Schema(
  {
    title: String,
    description: String,
    cover: String,
    content: String,
    published: {
      type: Boolean,
      default: false
    },
    visits: {
      type: Number,
      default: 0
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
      }
    ],
    classifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classification'
      }
    ]
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

export default mongoose.model('Article', schema)
