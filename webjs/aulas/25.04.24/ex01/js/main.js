import getCats from "./catAPI.js";

window.addEventListener("DOMContentLoaded", () => {
    const btnCats = document.getElementById("btnCats");
    
    btnCats.addEventListener("click", showCats);
});

const showCats = async () => {
    showMsgAlerta("Aguarde...")
    const vetCats = await getCats(); 
    console.log(vetCats);

    if(vetCats.length > 0) {
        const catPanel = document.getElementById("catPanel");

        vetCats.forEach(gato => {
            const img = document.createElement("img");
            img.src = gato.url;
            console.log(gato.url)
            
            catPanel.appendChild(img);
        });

    } else {
        showMsgAlerta("Erro no carregamento do gatinho.")
    }
}

const showMsgAlerta = msg => {
    document.getElementById("msgAlerta").innerHTML = msg;
}