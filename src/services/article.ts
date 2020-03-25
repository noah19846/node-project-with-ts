class ArticleService {
  public async getList(): Promise<Array<{}>> {
    return [
      {
        title: 'article1'
      },
      {
        title: 'article2'
      }
    ]
  }
}

const articleService = new ArticleService()

export default articleService
