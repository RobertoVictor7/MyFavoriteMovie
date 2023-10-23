import dotenv from 'dotenv';

dotenv.config();

class MovieManager {
    constructor(){
        this.apiUrl = 'https://api.themoviedb.org/3/movie/top_rated',
        this.apiKey = process.env.API_KEY
    }

    async getMovies() {
        try {
            const response = await fetch(this.apiUrl, {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${this.apiKey}`
                  }
            });

            return response.json()
        }catch(error) {
            throw error
        }
    }

    async deleteMovie(movieToDelete) {
        try {
            const allMovies = await this.getMovies()
            const movies = allMovies.results
            const movieName = movies.map(movie => movie.title)
            const moviesNewList = movieName.filter(movieName => movieName != movieToDelete)
            
            console.log(moviesNewList)
            
        }catch(error) {
            throw error
        }
    }
}



const movieManager = new MovieManager()

movieManager.deleteMovie('GoodFellas')

export default movieManager