import { useContext } from "react";
import { UsuarioLogadoContext } from "../../../shared/contexts";

interface IButtonLoginProps {
  label?: string | "Button";
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  // declarado na interface para ser reconhecido na desestruturacao no componente
  children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children  }) => {

  const { nomeDoUsuario } = useContext( UsuarioLogadoContext );

  return (
    <button
      type={ type }
      onClick={ onClick }
    >
     { nomeDoUsuario } { children }
    </button>
  )
};