import { Link } from "react-router-dom";
import { useRef } from "react";

import '../login/Login.css';
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {
  const counterRef = useRef({counter: 0});

  const { nomeDoUsuario, logout } = useUsuarioLogado();

  return (
    <div>
      <h2> Dashboard Page </h2>
      <h3> {nomeDoUsuario} </h3>

      <p> Contador: { counterRef.current.counter }</p>
      <div className="buttons">
        <button onClick={ () => counterRef.current.counter++ }>Count</button>
        <button onClick={ () => console.log(counterRef.current.counter) }> Console </button>
        <button onClick={ logout }> Logout </button>
      </div>
      <div className="buttons">
        <Link to="/entrar">Entrar</Link>
        <Link to="/listas">Listas</Link>
      </div>

    </div>
  );
};
