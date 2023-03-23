import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

export const Listas = () => {

  const [lista, setLista] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleClique = () => {
    navigate("/");
  };

  const handleCleanList = () => {
    setLista([]);
  };

  // o evento que o useCallback receber é um keyboard event handler tipado como input element (onKeyDown)
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((evt) => {
    if (evt.key === 'Enter') {
      if (evt.currentTarget.value.trim().length === 0 ) return;

      const value = evt.currentTarget.value;
      evt.currentTarget.value = '';

      setLista((oldLista) => {
        // se o valor já existir não inserir e retorna a lista atual
        if (oldLista.includes(value)) return oldLista;
        return [...oldLista, value];
      });
    }
  }, []);

  return(
    <div>

      <button onClick={ handleClique }> Página Inicial </button>
      <h3>Listas</h3>
      <p>Nomes:</p>
      <input onKeyDown={ handleInputKeyDown } />
      &nbsp;
      <button onClick={ handleCleanList }> Limpar </button>

      <ul>
        {lista.map((value , index) => {
          return (
            <li key={index}> {value} </li>
          );
        })}
      </ul>

    </div>
  );
};