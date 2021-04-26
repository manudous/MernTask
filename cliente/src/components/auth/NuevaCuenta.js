import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  // State para inciar sesión
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  //extraer de usuario
  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacíos

    // Passworld mínimo de 6 caracteres

    // Los 2 passwords sean iguales

    // Pasarlo al Action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una Cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>

        <Link to={"/"} className="enlace-cuenta">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
