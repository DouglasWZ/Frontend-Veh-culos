import React from "react";
import Nav from "../../components/Nav";

const Home = () => {
  return (
    <>
      <Nav
        ruta1="/registrar-vehiculo"
        enlace1="Registrar Vehículo"
        titulo="Control de Vehículos"
        enlace2="Registrar Entradas/Salidas"
        ruta2="/registrar-entradas"
      />
      <div className="contenedor-carro grid grid-cols-3 gap-3">
        <img className="imgCarro" src="img/silverado.png" alt="" />
        <img className="imgCarro" src="img/camaro.png" alt="" />
        <img className="imgCarro" src="img/escape.png" alt="" />
      </div>
    </>
  );
};

export default Home;
