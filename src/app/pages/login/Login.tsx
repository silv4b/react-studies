import { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import '../login/Login.css';
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";

export const Login = () => {
  // ao iniciar o projeto armazena uma referencia para o elemento input do HTML (tipado entre <>), inicialmente null
  // const inputEmaildRef = useRef<HTMLInputElement>(null);
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
      console.log(`Email: ${ email }`);
      console.log(`Senha: ${ senha }`);
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
            onPressEnter={ () => inputSenhaRef.current?.focus()  }
          />

          <InputLogin
            ref={ inputSenhaRef }
            label="Senha"
            value={ senha }
            type="password"
            onChange={ newValue => setSenha( newValue ) }
            onPressEnter={ () => buttonEntrarRef.current?.focus()  }
          />
        </div>

        <div className="buttons">
          {/* <button onClick={ handleClique } type="button"> Página Inicial </button>
          <button onClick={ handleLimpar } type="button"> Limpar </button>
          <button onClick={ handleEntrar } type="button" ref={ buttonEntrarRef }> Entrar </button> */}

          {/* <ButtonLogin label="Página Inicial" type="button" onClick={ handleClique } />
          <ButtonLogin label="Limpar" type="button" onClick={ handleLimpar } />
          <ButtonLogin label="Entrar" type="button" onClick={ handleEntrar } /> */}

          <ButtonLogin label="Página Inicial" type="button" onClick={ handleClique }>
            Página Inicial
          </ButtonLogin>
          <ButtonLogin label="Limpar" type="button" onClick={ handleLimpar } >
            Limpar
          </ButtonLogin>
          <ButtonLogin label="Entrar" type="button" onClick={ handleEntrar } >
            Entrar
          </ButtonLogin>
        </div>
      </form>
    </div>
  );
};
