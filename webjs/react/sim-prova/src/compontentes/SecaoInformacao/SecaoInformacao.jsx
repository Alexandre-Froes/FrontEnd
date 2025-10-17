import Apresentacao from "../Apresentacao";
import Boxes from "./Boxes/Boxes"
import style from './SecaoInformacao.module.css';

export default function SecaoInformacao() {
    const boxes = [
        {texto: "Plano de Desenvolvimento Institucional" },
        {texto: "Pesquisa Pública Processos IFTM" },
        {texto: "Licitações e Contratos" },
        {texto: "Receitas e Despesas" },
        {texto: "Dados abertos" },
        {texto: "Transparência e Prestaçãod de Contas" },
        {texto: "Servidores" },
        {texto: "Perguntas Frequentes" }
    ]

    return ( 
        <section className={style.secaoInformacao}>
            <Apresentacao 
                titulo="Acesso a Informação" 
                paragrafo="Veja dados de transparência e governança" />
            <Boxes listaBoxes={boxes}></Boxes>
        </section>
    );
}