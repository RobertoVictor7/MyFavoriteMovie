import dotenv from 'dotenv'

dotenv.config()

class MovieManager {
  constructor() {
    this.apiUrl ='https://api.themoviedb.org/3/movie/top_rated?language=pt-BR'
    this.apiKey = process.env.API_KEY
  }

  async getRandomMovie() {
    try {
      const response = await fetch(this.apiUrl, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
      })

      const responseBody = await response.json()
      const movies = responseBody.results
      const randomMovie = movies[Math.floor(Math.random() * movies.length)]

      const randomMovieInfo = {
        originalTitle: randomMovie.original_title,
        title: randomMovie.title,
        description: randomMovie.overview,
        posterPath: randomMovie.poster_path
      }

      return randomMovieInfo

    } catch (error) {
      throw error
    }
  }

}

const movieManager = new MovieManager()

export default movieManager
