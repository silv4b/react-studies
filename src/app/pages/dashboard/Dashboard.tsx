import { Link } from "react-router-dom";
import { useRef, useContext } from "react";

import '../login/Login.css';
import { UsuarioLogadoContext } from "../../shared/contexts";

export const Dashboard = () => {
  const counterRef = useRef({counter: 0});

  const { nomeDoUsuario } = useContext( UsuarioLogadoContext );

  return (
    <div>
      <h2> Dashboard Page </h2>
      <h3> { nomeDoUsuario } </h3>

      <p> Contador: { counterRef.current.counter }</p>
      <div className="buttons">
        <button onClick={ () => counterRef.current.counter++ }>Contador</button>
        <button onClick={ () => console.log(counterRef.current.counter) }> Console </button>
        <Link to="/entrar">Entrar</Link>
      </div>

    </div>
  );
};
