import { Router, Request, Response } from 'express'
import { classificationService } from '../../services'

const route = Router()

export default (app: Router) => {
  app.use('/classification', route)

  route.get('/list', async (req: Request, res: Response) => {
    const tags = await classificationService.getList()

    return res.json(tags).status(200)
  })

  route.post('/add', async (req: Request, res: Response) => {
    const result = await classificationService.add(req.body)

    return res.json({ result }).status(200)
  })

  route.post('/update', async (req: Request, res: Response) => {
    const result = await classificationService.update(req.body)

    return res.json({ result }).status(200)
  })

  route.post('/delete', async (req: Request, res: Response) => {
    const result = await classificationService.delete(req.body.id)

    return res.json({ result }).status(200)
  })
}
