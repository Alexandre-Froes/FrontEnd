import style from './Boxes.module.css';

function Boxes({listaBoxes}) {
    function showBoxes() {
        return (
        <>
            {listaBoxes.map(box => 
                <div key={box.texto}>
                    {box.texto}
                </div>)}
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