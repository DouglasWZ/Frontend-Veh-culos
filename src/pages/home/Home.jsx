import React from "react";
import "../home/home.css"

const Home = () => {
  return (
    <>
      <div className="bg-transparent grid grid-cols-3 gap-3 text-center">
        <button className=" boton1 text-white text-2xl font-semibold">
          Registrar Vehículo
        </button>
        <h1 className="text-white text-5xl font-black mt-5">
          Control de Vehículos
        </h1>
        <button className="boton2 text-white text-2xl font-semibold">
          Registrar Entradas/Salidas
        </button>
      </div>
      <div className="contenedor-carro grid grid-cols-3 gap-3">
        <img className="imgCarro" src="img/silverado.png" alt="" />
        <img className="imgCarro" src="img/camaro.png" alt="" />
        <img className="imgCarro" src="img/escape.png" alt="" />
      </div>
    </>
  );
};

export default Home;
