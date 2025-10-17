import Apresentacao from "../Apresentacao";
import Boxes from "../SecaoServicos/Boxes/Boxes"
import style from './SecaoServicos.module.css';

import checkmark from './img/checkmark.svg';
import edital from './img/edital.svg';
import estudarIFTM from './img/estudarIFTM.svg';

export default function SecaoServicos() {
    const boxes = [
        { texto: "Eleições do conselho superior", icon: checkmark},
        { texto: "Estude no IFTM", icon: estudarIFTM },
        { texto: "Editais", icon: edital },

    ]

    return ( 
        <section className={style.secaoServicos}>
            <Apresentacao 
                titulo="Servicos e Informações" 
                paragrafo="Selecione o assunto desejado" />
            <Boxes listaBoxes={boxes}></Boxes>
        </section>
    );
}