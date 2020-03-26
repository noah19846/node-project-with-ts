import {
  IClassificationInputDTO,
  IClassification
} from '../interfaces/classification'
import { ClassificationModel } from '../models'
import { Document } from 'mongoose'

class TagService {
  public async getList(): Promise<Array<IClassification | Document>> {
    const tags = await ClassificationModel.find({}, '-__v -content')

    return tags
  }

  public async add(articleInputDTO: IClassificationInputDTO): Promise<{}> {
    const data = await ClassificationModel.create(articleInputDTO)

    return data
  }

  public async update({ id, ...others }: IClassificationInputDTO): Promise<{}> {
    const data = await ClassificationModel.updateOne(
      { _id: id },
      {
        ...others,
        updatedAt: new Date()
      }
    )

    return data
  }

  public async delete(id: string): Promise<{}> {
    const data = await ClassificationModel.deleteOne({ _id: id })

    return data
  }
}

const tagService = new TagService()

export default tagService
