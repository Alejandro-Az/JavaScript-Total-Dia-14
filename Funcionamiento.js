import React from 'react';

function Funcionamiento(props) {
    let [entradaTeclado, setearTeclado] = React.useState(0);
    let [numeroRandom, setearRandom] = React.useState(Math.floor(Math.random() * (Number(props.maximo) - 1) + 1));

    function teclado(event) {
        setearTeclado(event.target.value);
    }

    function adivinar() {
        if(entradaTeclado == numeroRandom) {
            alert("atinaste!");
            setearRandom(Math.floor(Math.random() * (Number(props.maximo) - 1) + 1));
        } else {
            alert("Fallaste, el número era: " + numeroRandom);
            setearRandom(Math.floor(Math.random() * (Number(props.maximo) - 1) + 1));
        }
    }

    return (
        <div className='contenedor'>
            <div>
                <input type='number' onChange={teclado}></input>
                <button onClick={adivinar}>Adivinar</button>
            </div>
        </div>
    );
}

export default Funcionamiento;