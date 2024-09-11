import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';


import "./Estilos.css";


const Calculator = () => {
  const [primerNumero, setPrimerNumero] = useState("");
  const [segundoNumero, setSegundoNumero] = useState("");
  const [operador, setOperador] = useState("");
  const [resultadoPantalla, setResultadoPantalla] = useState("0");
  const [operacionPantalla, setOperacionPantalla] = useState("");
  const [historial, setHistorial] = useState([]);
  const [verHistorial, setVerHistorial] = useState(false);
  const [error, setError] = useState(null);

  const armarNumero = (numero) => {
    if (operador === "") {
      setPrimerNumero(primerNumero + numero);
      setResultadoPantalla(primerNumero + numero);
    } else {
      setSegundoNumero(segundoNumero + numero);
      setResultadoPantalla(segundoNumero + numero);
    }
    setOperacionPantalla(operacionPantalla + numero);
  };

  const borrarDatos = () => {
    setPrimerNumero("");
    setSegundoNumero("");
    setOperador("");
    setResultadoPantalla("0");
    setOperacionPantalla("");
    setHistorial([]);
  };

  function modoOscuro() {
    document.body.classList.toggle('dark-mode');
}

const agregarHistorial = (operacion) => {
  setHistorial((prevhistorial) => {
    if (prevhistorial.length >= 10) {
      return [operacion, ...prevhistorial.slice(0, 9)];
    }
    return [operacion, ...prevhistorial];
  });
};

  const realizarOperacion = async () => {
    if (primerNumero === "" || segundoNumero === "" || operador === "") return;
    try {
      const respuesta = await fetch( 
        `http://localhost:8080/api/calculadora/operacion?primerNumero=${primerNumero}&segundoNumero=${segundoNumero}&operador=${encodeURIComponent(operador)}`
      );
      if (!respuesta.ok) {
        const respuestaError = await respuesta.json();
        throw new Error(respuestaError.message );
      }
      const resultado = await respuesta.json();
      const operacion = `${primerNumero} ${operador} ${segundoNumero} = ${resultado}`;
      agregarHistorial(operacion);

      setResultadoPantalla(resultado);
      setOperacionPantalla(resultado);
      setPrimerNumero(resultado);
      setSegundoNumero("");
      setOperador("");
      setError(null);
    } catch (error) {
      setError("Error en la operación: " + error.message);
      borrarDatos();
    }
  };

  const validarUsoOperado = async (op) => {
    if (primerNumero !== "" && segundoNumero !== "" && operador !== "") {
      await realizarOperacion(); 
    }
    setOperador(op);
    setOperacionPantalla(`${operacionPantalla} ${op}`);
    setSegundoNumero(""); 

  };

  const mostrarHistorial = () => {
    setVerHistorial(!verHistorial);
  };


  return (
    <div className="calculadora border border-secondary border-4">
      <div class= "principal">
      <div class="iconos">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => modoOscuro()}/>
        </div>
        <div>
        <FontAwesomeIcon icon={faClockRotateLeft} onClick={mostrarHistorial} title={verHistorial ? "Ocultar Historial" : "Mostrar Historial"}/>
        </div>
      </div>
       <input type="text" class = "contenedores" value={operacionPantalla} readOnly />
       <input type="text" class = "contenedores resultado" value={resultadoPantalla} readOnly />
      </div>

      {error && (
  <div 
    className="alert alert-danger" 
    role="alert" 
    onClick={() => setError(null)} 
    style={{ cursor: 'pointer' }}   
  >
    {error}
  </div>
)}
      {verHistorial ? (
        <div className="historial mt-4">
          <h5>Historial de Operaciones</h5>
          <ul>
            {historial.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ): (
        <div className="row g-2 m-1">
        <div className="col-3">
          <button className="boton w-100 rounded-pill" onClick={borrarDatos}>C</button>
        </div>
        <div className="col-3">
          <button className="boton w-100 rounded-pill" onClick={() => validarUsoOperado("/")}>/</button>
        </div>
        <div className="col-3">
          <button className="boton w-100 rounded-pill" onClick={() => validarUsoOperado("*")}>*</button>
        </div>
        <div className="col-3">
          <button className="boton w-100 rounded-pill" onClick={() => validarUsoOperado("-")}>-</button>
        </div>
        <div class="col-3">
                <button class="boton2 w-100 rounded-pill rounded-pill"  onClick={() => armarNumero('7')}>7</button>
            </div>
            <div class="col-3">
                <button class="boton2 w-100 rounded-pill"  onClick={() => armarNumero('8')}>8</button>
            </div>
            <div class="col-3">
                <button class="boton2 w-100 rounded-pill" onClick={() => armarNumero('9')}>9</button>
            </div>
            <div class="col-3">
                <button class="boton w-100 rounded-pill"  onClick={() => validarUsoOperado("+")}>+</button>
            </div>
            <div class="col-3">
                <button class="boton2 w-100 rounded-pill" onClick={() => armarNumero('4')}>4</button>
            </div>
            <div class="col-3">
                <button class="boton2 w-100 rounded-pill" onClick={() => armarNumero('5')}>5</button>
            </div>
            <div class="col-3">
                <button class="boton2 w-100 rounded-pill" onClick={() => armarNumero('6')}>6</button>
            </div>
            <div class="col-3">
              <button class="boton2 w-100 rounded-pill" onClick={() => armarNumero('.')}>.</button>
            </div>
            <div class="col-3">
                <button class="boton2 w-100 rounded-pill" onClick={() => armarNumero('1')}>1</button>
            </div>
            <div class="col-3">
                <button class="boton2 w-100 rounded-pill" onClick={() => armarNumero('2')}>2</button>
            </div>
            <div class="col-3">
                <button class="boton2 w-100 rounded-pill" onClick={() => armarNumero('3')}>3</button>
            </div>
            <div class="col-3">
            <button class="boton3 w-100 rounded-pill" onClick={() => realizarOperacion()}>=</button>
            </div>

      
            <div class="col-9">
                <button class="boton2 w-100 rounded-pill btn-zero" onClick={() => armarNumero('0')}>0</button>
            </div>
            
            <div class="col-9">
   
            </div>
           
      </div>)
      }
    </div>
  );
};

export default Calculator;
