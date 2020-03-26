import rp from 'request-promise'
import { IArticleInputDTO } from '../interfaces/article'
import { ArticleModel } from '../models'
class ArticleService {
  private async getCoverUrlFromBing(): Promise<string | null> {
    const res = await rp('http://bing.getlove.cn/latelyBingImageStory')
    const data: Array<any> = JSON.parse(res)

    if (data.length) {
      return data[0].CDNUrl
    }

    return null
  }

  public async getList(options: any): Promise<{}> {
    const { page, size } = options
    const articles = await ArticleModel.find({}, '-__v -content')
      .populate({
        path: 'classifications',
        select: '-__v -createdAt -updatedAt'
      })
      .populate({
        path: 'tags',
        select: '-__v -createdAt -updatedAt'
      })
      .skip((page - 1) * size)
      .limit(size)
      .sort({
        createdAt: -1
      })
    const total = await ArticleModel.countDocuments()

    return { list: articles, total }
  }

  public async getDetail(id: string): Promise<{}> {
    const article = await ArticleModel.findById(id, '-__v -content')
      .populate({
        path: 'classifications',
        select: '-__v -createdAt -updatedAt'
      })
      .populate({
        path: 'tags',
        select: '-__v -createdAt -updatedAt'
      })
    const prev = await ArticleModel.find({ _id: { $lt: id } }, { title: 1 })
      .sort({ _id: -1 })
      .limit(1)
    const next = await ArticleModel.find({ _id: { $gt: id } }, { title: 1 })
      .sort({ _id: 1 })
      .limit(1)

    return { detail: article, prev: prev[0] || null, next: next[0] || null }
  }

  public async add(articleInputDTO: IArticleInputDTO): Promise<{}> {
    const cover = await this.getCoverUrlFromBing()
    const data = await ArticleModel.create({ ...articleInputDTO, cover })

    return data
  }

  public async update({ id, ...others }: IArticleInputDTO): Promise<{}> {
    const data = await ArticleModel.updateOne(
      { _id: id },
      {
        ...others,
        updatedAt: new Date()
      }
    )

    return data
  }

  public async delete(id: string): Promise<{}> {
    const data = await ArticleModel.deleteOne({ _id: id })

    return data
  }
}

const articleService = new ArticleService()

export default articleService
