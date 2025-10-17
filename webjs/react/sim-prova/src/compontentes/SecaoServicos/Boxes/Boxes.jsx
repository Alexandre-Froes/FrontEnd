import style from './Boxes.module.css';

function Boxes({listaBoxes}) {
    function showBoxes() {
        return (
        <>
            {listaBoxes.map(box => 
                <div key={box.texto}>
                    <div className={style.wrapper}>
                        <img src={box.icon} alt={box.texto} />
                    </div>
                    <span>{box.texto}</span>
                </div>
            )}
        </>
        );
    }

    return (
        <div className={style.container}>
            {showBoxes()}
        </div>
    );
}

export default Boxes;