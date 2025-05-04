const getFilmes = async() => {
    
    const urlFilmes = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1';
    const opcoes = {
        method: 'GET',
        headers: {
            accept: 'apllication/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGEzYmJhMTA0NzA4OWJhMjkzNTQ4OGRhMTc4NGI1YyIsIm5iZiI6MTc0NjM3NjY1MC4zNCwic3ViIjoiNjgxNzk3Y2FhYTk0ZjdjYjkyNTc2ZTY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nPGSJaZjlb1PmXJE6PsjoJE24yrzJ_pKwgaj4-Ni7-Q'
        }
    }

    try {
        const response = await fetch(urlFilmes, opcoes);
        const filmes = await response.json();

        return filmes.results;
    } catch(error) {

    }
}

const getGeneros = async () =>{
    const urlGeneros = "https://api.themoviedb.org/3/genre/movie/list?language=pt-br";
    const opcoes = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGEzYmJhMTA0NzA4OWJhMjkzNTQ4OGRhMTc4NGI1YyIsIm5iZiI6MTc0NjM3NjY1MC4zNCwic3ViIjoiNjgxNzk3Y2FhYTk0ZjdjYjkyNTc2ZTY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nPGSJaZjlb1PmXJE6PsjoJE24yrzJ_pKwgaj4-Ni7-Q'
        }
    };

    const response = await fetch(urlGeneros, opcoes);
    const generos = await response.json();

    return generos.genres;
}

    const manageFilmes = {
        getFilmes,
        getGeneros
    }

    export default manageFilmes;
