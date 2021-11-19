import dotenv from 'dotenv'
import express from 'express'
import { Application } from 'express'
import morgan from 'morgan'
import { AddressInfo } from 'net'
import path from 'path'

import appRouter from './routes.js'

dotenv.config()

const app: Application = express()
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

appRouter(app)

const __dirname = path.resolve()
const dir = path.join(__dirname, 'docs')
const staticDir = path.join(dir, 'static')

app.use('/static', express.static(staticDir))
app.use('*', express.static(dir))

async function listen() {
  const listener = await app.listen(app.get('port'))
  const { address, port } = listener.address() as AddressInfo

  console.log(`Server running on http://${address}:${port}`)

  function close(signal: String) {
    console.info(`${signal} signal received`)
    console.log('Closing http server')
    listener.close((err: Error | undefined) => {
      console.info('Http server closed')
      process.exit(err ? 1 : 0)
    })
  }

  process.on('SIGTERM', () => {
    close('SIGTERM')
  })

  process.on('SIGINT', () => {
    close('SIGINT')
  })
}

listen()