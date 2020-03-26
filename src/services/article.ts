import rp from 'request-promise'
import { IArticleInputDTO, IArticle } from '../interfaces/article'
import { ArticleModel } from '../models'
import { Document } from 'mongoose'
class ArticleService {
  private async getCoverUrlFromBing(): Promise<string | null> {
    const res = await rp('http://bing.getlove.cn/latelyBingImageStory')
    const data: Array<any> = JSON.parse(res)

    if (data.length) {
      return data[0].CDNUrl
    }

    return null
  }

  public async getList(): Promise<Array<IArticle | Document>> {
    const articles = await ArticleModel.find({}, '-__v -content')
      .populate({
        path: 'classifications',
        select: '-__v -createdAt -updatedAt'
      })
      .populate({
        path: 'tags',
        select: '-__v -createdAt -updatedAt'
      })

    return articles
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
