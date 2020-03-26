import { Router, Request } from 'express'
import { tagService } from '../../services'

const route = Router()

export default (app: Router) => {
  app.use('/tag', route)

  route.get('/list', async (req: Request, res: any, next) => {
    const tags = await tagService.getList()

    res.respondData = tags || []

    next()
  })

  route.post('/add', async (req: Request, res: any, next) => {
    const result = await tagService.add(req.body)

    res.respondData = result

    next()
  })

  route.post('/update', async (req: Request, res: any, next) => {
    const result = await tagService.update(req.body)

    res.respondData = result

    next()
  })

  route.post('/delete', async (req: Request, res: any, next) => {
    const result = await tagService.delete(req.body.id)

    res.respondData = result

    next()
  })
}
