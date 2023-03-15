import { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import '../login/Login.css';

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
          <label htmlFor="">
            <span> Email: </span>
            <input
              type="text"
              ref={ inputEmaildRef }
              value={ email }
              onChange={ e => setEmail(e.target.value) }
              // interroção quer dizer que ele pode ou não ser null
              onKeyDown={ e => e.key === 'Enter' ? inputSenhaRef.current?.focus() : inputEmaildRef.current?.focus()}
            />
          </label>

          <label htmlFor="">
            <span> Senha: </span>
            <input
              type="password"
              ref={ inputSenhaRef }
              value={ senha }
              onChange={ e => setSenha(e.target.value) }
              onKeyDown={ e => e.key === 'Enter' ? buttonEntrarRef.current?.focus() : undefined }
            />
          </label>
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
