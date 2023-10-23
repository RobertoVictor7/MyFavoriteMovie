import express from 'express'
import movieManager from './helpers/movieManager.js'

const app = express()

app.get('/', async (req, res) => {
  try { 
    const data = await movieManager.getRandomMovie()
    const movie = data
   
    res.send(movie);
  } catch (error) {
    res.send(error);
  }
})

app.listen(8080, () => {
  console.log('Running at port 8080');
})
