import { Router } from 'express'
import article from './routes/article'
import tag from './routes/tag'
import classification from './routes/classification'

// guaranteed to get dependencies
export default () => {
  const app = Router()

  article(app)
  tag(app)
  classification(app)

  return app
}
