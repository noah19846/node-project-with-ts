export default async function wrapRes(req: any, res: any, next: any) {
  try {
    const { respondData = null } = res
    const result = { code: 200, data: respondData, msg: 'ok' }

    return res.json(result).status(200)
  } catch (error) {
    return next(error)
  }
}
