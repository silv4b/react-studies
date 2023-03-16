import { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import '../login/Login.css';
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  // ao iniciar o projeto armazena uma referencia para o elemento input do HTML (tipado entre <>), inicialmente null
  const inputEmaildRef = useRef<HTMLInputElement>(null);
  const inputSenhaRef = useRef<HTMLInputElement>(null);
  const buttonEntrarRef = useRef<HTMLButtonElement>(null);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  // useEffect com dependência (executa cada vez que a dependência é alterada)
  // useEffect(() => {
  //   console.log(`Email: ${ email }`);
  // }, [email]);

  // useEffect(() => {
  //   console.log(`Senha: ${ senha }`);
  // }, [senha]);

  const handleEntrar = useCallback (() => {
    if (email === '' || senha === '') {
      alert('Campos vazios!');
      inputEmaildRef.current?.focus();
    } else {
      console.log(`Email: ${ email }`);
      console.log(`Senha: ${ senha }`);
    }
  },[email, senha]);

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
          <InputLogin
            label="Email"
            value={ email }
            onChange={ newValue => setEmail( newValue ) }
            onPressEnter={ () => inputEmaildRef.current?.focus()  }
          />

          <InputLogin
            label="Senha"
            value={ senha }
            type="password"
            onChange={ newValue => setSenha( newValue ) }
          />

          {/* <label>
            <span> Senha: </span>
            <input
              type="password"
              ref={ inputSenhaRef }
              value={ senha }
              onChange={ e => setSenha(e.target.value) }
            />
          </label> */}
        </div>

        <div className="buttons">
          <button onClick={ handleClique } type="button"> Página Inicial </button>
          <button onClick={ handleLimpar } type="button"> Limpar </button>
          <button onClick={ handleEntrar } type="button" ref={ buttonEntrarRef }> Entrar </button>
        </div>
      </form>
    </div>
  );
};
