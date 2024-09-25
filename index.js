function getCharacter(done) {//callback
    const results = fetch("https://rickandmortyapi.com/api/character/"); //para buscar los personajes

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getCharacter(data => {
    console.log(data);
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="image-containes">
                    <img src="${personaje.image}">
                    <h2>${personaje.name}</h2>
                    <span>${personaje.status}</span></div>
            </article>`);

        const main = document.querySelector("main");

        main.append(article);
    });
});