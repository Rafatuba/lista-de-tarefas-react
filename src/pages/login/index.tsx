import { useState } from "react";
import "./login-styles.css";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [nome, setNome] = useState("");

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  return (
    <div className="container-login">
      <div className="card-login">
        <h1>Informe seu nome</h1>
        <div className="container-login-form">
          <input
            value={nome}
            onChange={handleNomeChange}
            type="text"
            placeholder="Ex: João Silva"
          />
          <NavLink to="/home">
            <button>Entrar</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
