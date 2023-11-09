import React, { useEffect, useState } from "react";
import clienteAxios from "../config/axios";

const Tabla = () => {
  // Minuto 23:12 curso de fernando herrera. el useEffect es para que cuando se cree el componente solo ejecute una vez la funcion

  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    getVehiculos();
  }, []);

  const getVehiculos = async () => {
    const resp = await clienteAxios.get("http://localhost:4000/api/vehiculos");
    setVehiculos(resp.data.vehiculos);
  };

  return (
    <div className="contenedor-tabla mt-5">
      <h1 className="titulo">Listado de Vehículos</h1>
      <table className="tabla">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Placa</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo) => (
            <tr key={vehiculo.placa}>
              <th>{vehiculo.marca}</th>
              <th>{vehiculo.modelo}</th>
              <th>{vehiculo.placa}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
