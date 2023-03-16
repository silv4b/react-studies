import { Link } from "react-router-dom";
import { useRef } from "react";

import '../login/Login.css';

export const Dashboard = () => {
  const counterRef = useRef({counter: 0});

  return (
    <div>
      <h2> Dashboard Page </h2>

      <p> Contador: { counterRef.current.counter }</p>
      <div className="buttons">
        <button onClick={ () => counterRef.current.counter++ }>Contador</button>
        <button onClick={ () => console.log(counterRef.current.counter) }> Console </button>
        <Link to="/entrar">Entrar</Link>
      </div>

    </div>
  );
};
