import mongoose from 'mongoose'

const schema = new mongoose.Schema(
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
    tags: {
      type: Array,
      default: []
    },
    classifications: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
)

export default mongoose.model('Article', schema)
