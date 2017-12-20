import React from 'react';

const Photo = (props) => (
    <div className="tarjeta-contenedor">
       <div className="imagen-contenedor">
          <img className="imagen" src={props.url} />
        </div>
        <div className="contenido">
           <h2>{props.title} </h2>
           <p>{prosp.thumbnailUrl} </p>
        </div>
    </div>);

export default Photo;