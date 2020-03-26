import { ITagInputDTO, ITag } from '../interfaces/tag'
import { TagModel } from '../models'
import { Document } from 'mongoose'
class TagService {
  public async getList(): Promise<Array<ITag | Document>> {
    const tags = await TagModel.find({}, '-__v -content')

    return tags
  }

  public async add(articleInputDTO: ITagInputDTO): Promise<{}> {
    const data = await TagModel.create(articleInputDTO)

    return data
  }

  public async update({ id, ...others }: ITagInputDTO): Promise<{}> {
    const data = await TagModel.updateOne(
      { _id: id },
      {
        ...others,
        updatedAt: new Date()
      }
    )

    return data
  }

  public async delete(id: string): Promise<{}> {
    const data = await TagModel.deleteOne({ _id: id })

    return data
  }
}

const tagService = new TagService()

export default tagService
