let cachedMovieName = null

const generateMovieTip = async () => {
  await catchApiData()
  const movieTip = document.querySelector('.movie__tip')
  const numberOfCharacters = cachedMovieName.split('')

  numberOfCharacters.forEach((item) => { 
    const newCharacter = document.createElement('span')

    if(item == ' ') {
      newCharacter.prepend('-')
    } else {
      newCharacter.prepend('_')
    }
  
    movieTip.append(newCharacter)
  })
  
  console.log(numberOfCharacters)
}

const sendMovieName = (event) => {
  event.preventDefault()

  const movieInput = document.getElementById('movieName')
  const movieName = movieInput.value.toLowerCase()
  movieInput.value = ''
  const newMovieAttempt = document.createElement('div')
  newMovieAttempt.innerHTML = movieName
  const attemptsArea = document.querySelector('.attempts')

  attemptsArea.prepend(newMovieAttempt)

  if (movieName == cachedMovieName) {
    newMovieAttempt.classList.add('correctGuess')
  } else {
    newMovieAttempt.classList.add('wrongGuess')
  }
}

async function catchApiData() {
  try {
    const response = await fetch('/movieData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    const dataObject = {
      title: data.title,
    }
    cachedMovieName = dataObject.title
    console.log(dataObject)
    return dataObject
  } catch (error) {
    console.error('Error in catchApiData:', error)
    throw error
  }
}


generateMovieTip()
