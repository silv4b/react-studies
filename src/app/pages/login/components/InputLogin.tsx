interface IInputLoginPros {
  // Obs.: ? na frenter do parâmetro o torna opcional
  label: string;
  value: string;
  type?: string | "text";
  onChange: ( newValue: string ) => void;
  onPressEnter?: () => void;
}

export const InputLogin: React.FC<IInputLoginPros> = (props) => {
  return (
    <label>
      <span> { props.label }: </span>
      <input
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
};