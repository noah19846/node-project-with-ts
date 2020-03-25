import { Container } from 'typedi'
import LoggerInstance from './logger'

export default ({
  mongoConnection,
  models
}: {
  mongoConnection: any
  models: { name: string; model: any }[]
}) => {
  try {
    models.forEach((m) => {
      Container.set(m.name, m.model)
    })

    LoggerInstance.info(mongoConnection)

    Container.set('logger', LoggerInstance)

    LoggerInstance.info('✌️ Agenda injected into container')
  } catch (e) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', e)
    throw e
  }
}
