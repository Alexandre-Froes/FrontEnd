function tituloSubtitulo(props) {
    return (  
        <section className="container column">
            <h1>{props.titulo}</h1>
            <p>{props.subtitulo}</p>
        </section>
    );
}

export default tituloSubtitulo;