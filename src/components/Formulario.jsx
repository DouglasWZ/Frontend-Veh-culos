import { useState } from "react";
import Alerta from "./Alerta";
import clienteAxios from "../config/axios";

const Formulario = ({ cambiarComponente }) => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");

  const [alerta, setAlerta] = useState({});

  // Función para manejar el envio del formulario
  const handleGuardar = async () => {
    // Validar el Formulario
    if ([marca, modelo, placa].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    //Eliminar Alerta en caso de que pase la validación
    setAlerta({});

    try {
      // Objeto con los datos a enviar
      const data = {
        marca,
        modelo,
        placa,
      };

      //Realizar la solicitud POST con Axios
      const vehiculo = await clienteAxios.post("/vehiculos", data);

      // Manejar la respuesta del servidor si es necesario
      console.log("Respuesta del servidor:", vehiculo.data);

      // Reiniciar los estados despues de guardar los datos
      setMarca("");
      setModelo("");
      setPlaca("");
    } catch (error) {
      console.log("Error al enviar los datos", error);
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div className="posts">
        <div class="container">
          {msg && <Alerta alerta={alerta} />}
          <button
            onClick={cambiarComponente}
            className="btn btn-primary mb-4 mr-5"
          >
            Regresar
          </button>
          <button onClick={handleGuardar} className="btn btn-primary mb-4">
            Guardar Datos
          </button>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
            <label for="floatingInput">Marca</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            />
            <label for="floatingInput">Modelo</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
            />
            <label for="floatingInput">Placa</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;
