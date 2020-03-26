import { Router, Request } from 'express'
import { accountService } from '../../services'

const route = Router()

export default (app: Router) => {
  app.use('/account', route)

  route.post('/sign-up', async (req: Request, res: any, next) => {
    const data = await accountService.signUp(req.body)

    res.respondData = data

    next()
  })

  route.post('/sign-in', async (req: Request, res: any, next) => {
    const result = await accountService.signIn(req.body)

    res.respondData = result

    next()
  })
}
