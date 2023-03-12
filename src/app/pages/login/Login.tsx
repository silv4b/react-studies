import { useState } from "react";
import { useNavigate } from "react-router-dom";
// useHistory -> useNavigate

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const handleEntrar = () => {
    console.log(`Email: ${email}`);
    console.log(`Senha: ${senha}`);
    setEmail('');
    setSenha('');
  }

  const handleClick = () => {
    // history.push -> navigate
    navigate("/");
  };

  return (
    <div>
      <h2> Login Page </h2>

      <form action="">
        <label htmlFor="">
          <span> Email: </span>
          <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
        </label>

        <br /> <br />

        <label htmlFor="">
          <span> Senha: </span>
          <input value={senha} onChange={e => setSenha(e.target.value)} type="password" />
        </label>

        <br /> <br />

        <button onClick={ handleClick } type="button"> Página Inicial </button>
        <span>  </span>
        <button onClick={ handleEntrar } type="button"> Entrar </button>
      </form>
    </div>
  );
};
