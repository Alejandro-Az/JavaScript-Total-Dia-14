import React from 'react';
import imagen from './banner.jpg';

function Encabezado(props) {
    
    return (
        <div className='contenedor'>
            <div className='encabezado'>
                <img src={imagen} alt='banner'></img>
                <h1>Mystic digits</h1>
            </div>
        </div>
    );
}

export default Encabezado;