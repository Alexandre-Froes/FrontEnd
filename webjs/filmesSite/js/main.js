import manageFilmes from "./fetchFilmesInfo.js";

window.addEventListener("DOMContentLoaded", () => {
    const filmeContainer = document.getElementById("filmeContainer");

    const caminho = "https://image.tmdb.org/t/p/w200";
    const mostrarFilmes = async() => {
        const filmesData = await manageFilmes.getFilmes();
        const generosData = await manageFilmes.getGeneros();

        console.log(filmesData);
        
        filmesData.forEach((filme, index) => {
            const filmeDiv = document.createElement("div");
            filmeDiv.className = "filmeDiv";
        
            const filmeInfo = document.createElement("div");
            filmeInfo.className = "filmeInfo"
        
            const img = document.createElement("img");
            img.src = caminho + filme.poster_path;
            img.alt = "Poster do filme " + filme.title;
        
            const tituloFilme = document.createElement("h2");
            const nomeOriginal = document.createElement("p");
            nomeOriginal.className = "nomeOriginalFilme";
        
            const notaContainer = document.createElement("div");
            notaContainer.className = "container";
            
            const notaFilme = document.createElement("p");
            notaFilme.className = "notaFilme";
        
            const qtdNotaFilme = document.createElement("p");
            const generoContainer = document.createElement("div");
            generoContainer.classList = "container";
        
            const dataLancamento = document.createElement("p");
        
            tituloFilme.textContent = filme.title;
            nomeOriginal.textContent = filme.original_title;

            notaFilme.textContent = filme.vote_average;
            if(filme.vote_average === 0) {
                notaFilme.textContent = "Sem nota";
                notaFilme.className = "semNota";
            } 

            if(filme.vote_average >= 9) {
                notaFilme.className = "muitoBoa";            
            } else if(filme.vote_average >= 7) {
                notaFilme.className = "boa";
            } else if(filme.vote_average >= 5) {
                notaFilme.className = "media";
            } else if (filme.vote_average !== 0){
                notaFilme.className = "ruim";
            }

            qtdNotaFilme.textContent = filme.vote_count;

            const nomesGeneros = generosData
            .filter(genero => filme.genre_ids.includes(genero.id))
            .map(genero => genero.name);
            
            dataLancamento.textContent = filme.release_date;

            filmeContainer.appendChild(filmeDiv);
            filmeDiv.appendChild(img);
            filmeDiv.appendChild(filmeInfo);

            filmeInfo.appendChild(nomeOriginal);
            filmeInfo.appendChild(tituloFilme);
            filmeInfo.appendChild(notaContainer);
            notaContainer.appendChild(notaFilme);
            notaContainer.appendChild(qtdNotaFilme);
            filmeInfo.appendChild(generoContainer);

            nomesGeneros.forEach(nomeGenero => {
                const generoNome = document.createElement("span");
                generoNome.textContent = nomeGenero;
                generoContainer.appendChild(generoNome);
            });

            filmeInfo.appendChild(dataLancamento);
        });
    }

    mostrarFilmes();
});