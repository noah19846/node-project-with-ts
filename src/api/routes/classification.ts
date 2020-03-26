import { Router, Request } from 'express'
import { classificationService } from '../../services'

const route = Router()

export default (app: Router) => {
  app.use('/classification', route)

  route.get('/list', async (req: Request, res: any, next) => {
    const result = await classificationService.getList()

    res.respondData = result || []

    next()
  })

  route.post('/add', async (req: Request, res: any, next) => {
    const result = await classificationService.add(req.body)

    res.respondData = result

    next()
  })

  route.post('/update', async (req: Request, res: any, next) => {
    const result = await classificationService.update(req.body)

    res.respondData = result

    next()
  })

  route.post('/delete', async (req: Request, res: any, next) => {
    const result = await classificationService.delete(req.body.id)

    res.respondData = result

    next()
  })
}
