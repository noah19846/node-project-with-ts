import expressLoader from './express'
import mongooseLoader from './mongoose'
import dependencyInjectorLoader from './dependencyInjector'
import Logger from './logger'
import express from 'express'

export default async ({ expressApp }: { expressApp: express.Application }) => {
  const mongoConnection = await mongooseLoader()
  const articleModel = {
    name: 'articleModel',
    model: require('../models').Article
  }

  await dependencyInjectorLoader({
    mongoConnection,
    models: [articleModel]
  })
  Logger.info('✌️ DB loaded and connected!')

  Logger.info('✌️ Dependency Injector loaded')

  await expressLoader({ app: expressApp })
  Logger.info('✌️ Express loaded')
}
