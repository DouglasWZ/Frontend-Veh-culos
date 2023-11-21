import { useState } from "react";

import Nav from "../../components/Nav";
import Tabla from "../../components/Tabla";
import Formulario from "../../components/Formulario";

const RegistrarVehiculo = () => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  const cambiarComponente = () => {
    setMostrarComponente(!mostrarComponente);
  };

  return (
    <>
      <Nav
        ruta1="/"
        enlace1="Inicio"
        titulo="Control de Vehículos"
        enlace2="Registrar Entradas/Salidas"
        ruta2="/registrar-entradas"
      />
      {mostrarComponente ? (
        <Tabla cambiarComponente={cambiarComponente} />
      ) : (
        <Formulario cambiarComponente={cambiarComponente} />
      )}
    </>
  );
};

export default RegistrarVehiculo;
