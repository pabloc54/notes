import dotenv from 'dotenv'
import moongose from 'mongoose'

dotenv.config()

const SRV = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.bmjei.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const options: moongose.ConnectOptions = {
  autoIndex: true,
  keepAlive: true
}

moongose
  .connect(SRV, options)
  .then(() => {
    console.log('Database connected')
  })
  .catch((err) => {
    console.log(err)
  })
