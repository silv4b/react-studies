import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import '../login/Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  // useEffect sem dependência
  useEffect(() => {
    // if (window.confirm('Ok ou Cancelar?')) {
    //   console.log("Opção [Ok] escolhida.");
    // } else {
    //   console.log("Opção [Cancelar] escolhida.");
    // }
  }, []);

  // useEffect com dependência (executa cad vez que a dependência é alterada)
  useEffect(() => {
    console.log(`Email: ${ email }`);
  }, [email]);

  useEffect(() => {
    console.log(`Senha: ${ senha }`);
  }, [senha]);

  const handleEntrar = () => {
    if (email === '' || senha === '') {
      alert("Campos vazios!");
    } else {
      console.log(`Email: ${ email }`);
      console.log(`Senha: ${ senha }`);
    }
  }

  const handleLimpar = () => {
    setEmail('');
    setSenha('');
  }

  const handleClique = () => {
    // history.push -> navigate
    navigate("/");
  };

  const emailLenght = useMemo(() => {
    return email.length
  }, [email.length]);

  const senhaLenght = useMemo(() => {
    return senha.length
  }, [senha.length]);

  return (
    <div>
      <h2> Página de Login </h2>

      <form action="">
        <p>Caractéres no email: { emailLenght }</p>

        <p>Caractéres na senha: { senhaLenght }</p>

        <div className="labels">
          <label htmlFor="">
            <span> Email: </span>
            <input value={ email } onChange={ e => setEmail(e.target.value) } type="text" />
          </label>

          <label htmlFor="">
            <span> Senha: </span>
            <input value={ senha } onChange={ e => setSenha(e.target.value) } type="password" />
          </label>
        </div>

        <div className="buttons">
          <button onClick={ handleClique } type="button"> Página Inicial </button>
          <button onClick={ handleEntrar } type="button"> Entrar </button>
          <button onClick={ handleLimpar } type="button"> Limpar </button>
        </div>
      </form>
    </div>
  );
};
