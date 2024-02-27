var path = "/Users/tsangtszling/Desktop/self_prog/SecretGarden/word_game/storage.json";

fetch(path)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Error fetching the JSON file:', error);
    });