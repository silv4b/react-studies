import React from "react";

interface IInputLoginPros {
  // Obs.: ? na frente do parâmetro o torna opcional
  label: string;
  value: string;
  type?: string | "text";
  onChange: ( newValue: string ) => void;
  onPressEnter?: () => void;
}

// React.forwardRef -> Passando uma ref para dentro do componente (usado em algumas especificidades)
export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginPros>((props, ref) => {
  return (
    <label>
      <span> { props.label }: </span>
      <input
        ref={ ref }
        value={ props.value }
        type={ props.type }
        onChange={ e => props.onChange( e.target.value ) }
        onKeyDown={
          e => e.key === 'Enter'
          // se onPressEnter não for undefined, onPressEnter() é executado
          ? props.onPressEnter && props.onPressEnter()
          : undefined
        }
      />
    </label>
  );
});