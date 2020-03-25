import expressLoader from './express'
import mongooseLoader from './mongoose'
import Logger from './logger'
import express from 'express'

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await mongooseLoader()
  Logger.info('✌️ DB loaded and connected!')

  Logger.info('✌️ Dependency Injector loaded')

  await expressLoader({ app: expressApp })
  Logger.info('✌️ Express loaded')
}
