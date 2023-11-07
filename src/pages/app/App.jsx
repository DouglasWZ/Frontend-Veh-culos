/* Hooks */
import { useRoutes, BrowserRouter } from "react-router-dom";

/* Paginas */
import Home from "../home/Home";
import RegistrarVehiculo from "../registrarVehiculo/RegistrarVehiculo";
import EntradasVehiculo from "../entradaVehiculo/EntradasVehiculo";
import NotFound from "../notFound/NotFound";

/* Archivos */
import "./App.css";

/* Funciones */

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/registrar-vehiculo", element: <RegistrarVehiculo /> },
    { path: "/registrar-entradas", element: <EntradasVehiculo /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </>
  );
};

export default App;
