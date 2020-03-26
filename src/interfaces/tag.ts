export interface ITagInputDTO {
  id?: string
  name: string
}

export interface ITag extends ITagInputDTO {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}
