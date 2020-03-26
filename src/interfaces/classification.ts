export interface IClassificationInputDTO {
  id?: string
  name: string
}

export interface IClassification extends IClassificationInputDTO {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}
