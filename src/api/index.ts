import { Router } from 'express'
import article from './routes/article'

// guaranteed to get dependencies
export default () => {
  const app = Router()

  article(app)

  return app
}
