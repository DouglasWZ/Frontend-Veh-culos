import { useEffect, useState } from "react";

import clienteAxios from "../config/axios";

const Tabla = ({ cambiarComponente }) => {
  const [vehiculos, setVehiculos] = useState([]);

  // Minuto 23:12 curso de fernando herrera. el useEffect es para que cuando se cree el componente solo ejecute una vez la funcion
  useEffect(() => {
    getVehiculos();
  }, []);

  const getVehiculos = async () => {
    const resp = await clienteAxios.get("/vehiculos");
    setVehiculos(resp.data.vehiculos);
  };
  return (
    <>
      <div className="posts">
        <div className="container">
          <button onClick={cambiarComponente} className="btn btn-primary mb-4">
            Nuevo Vehículo
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {vehiculos.map((vehiculo) => (
                <tr key={vehiculo.placa}>
                  <th>{vehiculo.marca}</th>
                  <th>{vehiculo.modelo}</th>
                  <th>{vehiculo.placa}</th>
                  <th>
                    <button
                      onClick={() => navigate(`/post/${vehiculo.placa}`)}
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(post)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tabla;
