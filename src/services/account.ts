import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { IAccountInputDTO } from '../interfaces/account'
import { AccountModel } from '../models'
import config from '../config'

class TagService {
  public async signUp(obj: IAccountInputDTO): Promise<Object> {
    const result = await AccountModel.create(obj)

    return result
  }

  public async signIn(obj: IAccountInputDTO): Promise<Object> {
    const { username, password } = obj
    const user: any = await AccountModel.findOne({
      username
    })

    if (!user) {
      return {
        code: 40012,
        msg: '用户名不存在'
      }
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return {
        code: 40013,
        msg: '密码无效'
      }
    }

    const token = jwt.sign({ id: String(user._id) }, config.jwtSecret, {
      expiresIn: '7 days'
    })

    return { token, username }
  }
}

const tagService = new TagService()

export default tagService
