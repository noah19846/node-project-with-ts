import { Router, Request, Response } from 'express'
import { articleService } from '../../services'

const route = Router()

export default (app: Router) => {
  app.use('/article', route)

  route.get('/list', async (req: Request, res: Response) => {
    const articles = await articleService.getList()

    return res.json(articles).status(200)
  })

  route.post('/add', async (req: Request, res: Response) => {
    const result = await articleService.add(req.body)

    return res.json({ result }).status(200)
  })

  route.post('/update', async (req: Request, res: Response) => {
    const result = await articleService.update(req.body)

    return res.json({ result }).status(200)
  })

  route.post('/delete', async (req: Request, res: Response) => {
    const result = await articleService.delete(req.body.id)

    return res.json({ result }).status(200)
  })
}
