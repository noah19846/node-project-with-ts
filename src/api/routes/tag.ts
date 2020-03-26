import { Router, Request, Response } from 'express'
import { tagService } from '../../services'

const route = Router()

export default (app: Router) => {
  app.use('/tag', route)

  route.get('/list', async (req: Request, res: Response) => {
    const tags = await tagService.getList()

    return res.json(tags).status(200)
  })

  route.post('/add', async (req: Request, res: Response) => {
    const result = await tagService.add(req.body)

    return res.json({ result }).status(200)
  })

  route.post('/update', async (req: Request, res: Response) => {
    const result = await tagService.update(req.body)

    return res.json({ result }).status(200)
  })

  route.post('/delete', async (req: Request, res: Response) => {
    const result = await tagService.delete(req.body.id)

    return res.json({ result }).status(200)
  })
}
