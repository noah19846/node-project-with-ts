import { Router, Request, Response } from 'express'
import { articleService } from '../../services'

const route = Router()

export default (app: Router) => {
  app.use('/articles', route)

  route.get('/list', async (req: Request, res: Response) => {
    const articles = await articleService.getList()

    return res.json({ articles }).status(200)
  })
}
