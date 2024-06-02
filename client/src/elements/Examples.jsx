// src/elements/Examples.jsx

import React from 'react';
import { useState } from 'react';
import '../index.css';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };


function ReactButton(props){ // Esto es un componente
    return(
        <button className={props.className}>Esto es un botón personalizado</button>
    )
}

function ReactImage(props){ // Esto es un componente 
    return(
        <img src={props.imageUrl} alt={props.name} style={{width:user.imageSize, height:user.imageSize }} />
    )
}
function isClicked(){ // Esta es una función que muestra un alert
    alert('clicked');
    return false
}

function Examples() {  // Componente principal

const [count=0, setCount] = useState(0);
function increment() {
setCount(count + 1);

}
  return (
    <div>
      <h1>Examples Page</h1>
      <div> <p>Aca muestro lógica dentro del jsx si es true algo si es false otro</p> 
                {isClicked===true ? (<p>algo</p>) : (<p>otro</p>) }
                <ReactButton className="buttoncito" />
                <br></br>
                {user.name} esto es el el atributo de un objeto
                <br></br>
                Este boton llama a una funcion que muestra un alert
                <button onClick={isClicked}>Click Me</button>
                <br></br>
                Funciones que empiezan con use son llamadas hooks, este boton usa un hook llamado useState 
                <button onClick={increment}>Click Count {count}</button>
                <button onClick={()=>setCount(count - 1)}>Click Count {count}</button>
                <br></br>
                <ReactImage imageUrl={user.imageUrl} name={user.name} imageSize={user.imageSize} />
            </div>
        <h3>Other Taks</h3>
      <p>This is the Examples page.</p>
    </div>
  );
}


export default Examples;
