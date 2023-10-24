async function catchApiData() {

    fetch('/movieData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json' // Defina os cabeçalhos conforme necessário
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          
          console.error('Error:', error);
        });
}

catchApiData() 