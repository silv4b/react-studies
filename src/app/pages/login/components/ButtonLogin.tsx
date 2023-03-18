interface IButtonLoginProps {
  label?: string | "Button";
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  // declarado na interface para ser reconhecido na desestruturacao no componente
  children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children  }) => {
  return (
    <button
      type={ type }
      onClick={ onClick }
    >
      { children }
    </button>
  )
};