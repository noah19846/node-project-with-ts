export default async function wrapRes(req: any, res: any) {
  const { respondData = null } = res
  const result = { code: 200, data: respondData, msg: 'ok' }

  res.json(result).status(200)
}
