export interface IArticleInputDTO {
  id?: string
  title: string
  content: string
  tags?: Array<any>
  classifications?: Array<any>
  description?: string
  cover?: string
}

export interface IArticle extends IArticleInputDTO {
  id: string
  tags: Array<any>
  classifications: Array<any>
  description: string
  cover: string
  createdAt: Date
  updatedAt: Date
  published: boolean
}
