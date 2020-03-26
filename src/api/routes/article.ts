import { Router, Request } from 'express'
import { articleService } from '../../services'

const route = Router()

export default (app: Router) => {
  app.use('/article', route)

  route.get('/list', async (req: Request, res: any, next) => {
    const articles = await articleService.getList()

    res.respondData = articles || []

    next()
  })

  route.post('/add', async (req: Request, res: any, next) => {
    const result = await articleService.add(req.body)

    res.respondData = result

    next()
  })

  route.post('/update', async (req: Request, res: any, next) => {
    const result = await articleService.update(req.body)

    res.respondData = result

    next()
  })

  route.post('/delete', async (req: Request, res: any, next) => {
    const result = await articleService.delete(req.body.id)

    res.respondData = result

    next()
  })
}
