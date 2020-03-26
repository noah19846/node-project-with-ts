import { Router, Request } from 'express'
import { articleService } from '../../services'

const route = Router()

export default (app: Router) => {
  app.use('/article', route)

  route.get('/list', async (req: Request, res: any, next) => {
    let { size = 20, page = 1 } = req.query

    size = Number(size)
    page = Number(page)

    const articles = await articleService.getList({ page, size })

    res.respondData = articles || []

    next()
  })

  route.get('/:id', async (req: Request, res: any, next) => {
    const { id } = req.params
    const result = await articleService.getDetail(id)

    res.respondData = result

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
