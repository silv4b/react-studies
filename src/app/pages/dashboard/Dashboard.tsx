import { Link } from "react-router-dom";
import { useRef } from "react";

export const Dashboard = () => {
  const counterRef = useRef({counter: 0});

  return (
    <div>
      <h2> Dashboard Page </h2>

      <p> Contador: { counterRef.current.counter }</p>
      <button onClick={ () => counterRef.current.counter++ }>Somar</button>
      <button onClick={ () => console.log(counterRef.current.counter) }> Log </button>

      <Link to="/entrar">Entrar</Link>
    </div>
  );
};
