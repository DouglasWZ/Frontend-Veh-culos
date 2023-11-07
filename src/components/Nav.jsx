import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <>
      <div className="bg-transparent grid grid-cols-3 gap-3">
        <NavLink
          className=" boton1 text-white text-2xl font-semibold"
          to={props.ruta1}
        >
          {props.enlace1}
        </NavLink>
        <h1 className="text-center text-white text-5xl font-black mt-5">
          {props.titulo}
        </h1>
        <NavLink
          to={props.ruta2}
          className="boton2 text-white text-2xl font-semibold"
        >
          {props.enlace2}
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
