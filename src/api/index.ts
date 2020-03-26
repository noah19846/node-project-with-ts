import { Router } from 'express'
import article from './routes/article'
import tag from './routes/tag'
import classification from './routes/classification'
import account from './routes/account'
import wrapRes from './middlewares/wrap-res'

// guaranteed to get dependencies
export default () => {
  const app = Router()

  article(app)
  tag(app)
  classification(app)
  account(app)

  app.use(wrapRes)

  return app
}
