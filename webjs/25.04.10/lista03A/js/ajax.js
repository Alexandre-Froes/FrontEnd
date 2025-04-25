let url = "https://alexandre-froes.github.io/FrontEnd/webjs/24.04.10/lista03A/pessoa.json";

const xhttpObjPessoa = () => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = () => {
        if(xhttp.readyState === 4 && xhttp.status === 200) {
            console.log(JSON.parse(xhttp.responseText).nome);
        }
    }

    xhttp.open("GET", url, true);
    xhttp.send();
}

const fetchPessoa = () => {
    fetch(url)
        .then(response => response.json())
        .then(info => console.log(info.nome));
}

const ajax = {
    xhttpObjPessoa,
    fetchPessoa
}

export default ajax;