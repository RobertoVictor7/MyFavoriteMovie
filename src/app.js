import express from 'express'
import movieManager from './helpers/movieManager.js'

const app = express()
const data = await movieManager.getMovies()

app.get('/', async (req, res) => {
  try {
    const movieList = data.results;
    const moviePoster = movieList.map(item => item.poster_path);

    res.send(moviePoster);
  } catch (error) {
    res.send(error);
  }
})

app.listen(8080, () => {
  console.log('Running at port 8080');
})
