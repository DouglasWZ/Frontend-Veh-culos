import React from "react";

import Nav from "../../components/Nav";
import Tabla from "../../components/Tabla";

const RegistrarVehiculo = () => {
  return (
    <>
      <Nav
        ruta1="/"
        enlace1="Inicio"
        titulo="Control de Vehículos"
        enlace2="Registrar Entradas/Salidas"
        ruta2="/registrar-entradas"
      />
      <Tabla />
    </>
  );
};

export default RegistrarVehiculo;
