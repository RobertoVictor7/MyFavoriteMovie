import express from 'express'
import movieManager from './helpers/movieManager.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const app = express()

app.use(express.static('../public'))

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/movieData', async (req, res) => {
  const data = await movieManager.getRandomMovie()
  const movie = data

  res.send(movie)
})

app.listen(8080, () => {
  console.log('Running at port 8080')
})
