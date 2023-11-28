// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(data => { 
//     console.log(data)
//     console.log(data.message)
    
//     const wouf = document.querySelector(".wouf")
//     wouf.src= data.message
// })

fetch('https://api.api-onepiece.com/episodes')
.then(response => response.json())
.then(data => {
    // Sélectionnez les 300 premiers épisodes
    const episodes = data.slice(0, 300);
    console.log(episodes);

    // Affichez les informations sur les épisodes dans la liste
    const episodesList = document.getElementById('episodesList');

    for (let i = 0; i < 300; i++) {
        const episode = episodes[i];

        // Créez un élément de carte pour chaque épisode
        const card = document.createElement('div');
        card.classList.add('episode-card'); // Ajoute une classe pour le style CSS de la carte

        // Remplissez le contenu de la carte avec les informations de l'épisode
        card.innerHTML = `
            <h2>Episode ${episode.id}:</h2>
            <p>${episode.title}</p>
            <p>${episode.description}</p>
        `;

        // Ajoutez la carte à la liste des épisodes
        episodesList.appendChild(card);
    }
});