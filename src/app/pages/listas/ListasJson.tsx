import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";


interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const ListasJason = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  const navigate = useNavigate();

  const handleClique = () => {
    navigate("/");
  };

  const handleCleanList = () => {
    setLista([]);
  };

  // o evento que o useCallback receber é um keyboard event handler tipado como input element (onKeyDown)
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((evt) => {
      if (evt.key === "Enter") {
        if (evt.currentTarget.value.trim().length === 0) return;

        const value = evt.currentTarget.value;
        evt.currentTarget.value = "";

        setLista((oldLista) => {
          // se o valor já existir não inserir e retorna a lista atual
          if (oldLista.some((ListaTarefa) => ListaTarefa.title === value))
            return oldLista;
          return [
            ...oldLista,
            {
              id: oldLista.length,
              title: value,
              isCompleted: false,
            },
          ];
        });
      }
    }, []);

  return (
    <div>
      <button onClick={handleClique}> Página Inicial </button>
      <h3>Listas</h3>
      <p>Nomes:</p>
      <input onKeyDown={handleInputKeyDown} />
      &nbsp;
      <button onClick={handleCleanList}> Limpar </button>
      <p>{lista.filter((ListaTarefa) => ListaTarefa.isCompleted).length}</p>
      <ul>
        {lista.map((ListaTarefa) => {
          return (
            <li key={ListaTarefa.id}>
              <input
                type="checkbox"
                checked={ListaTarefa.isCompleted}
                onChange={() => {
                  setLista((oldListaTarefa) => {
                    return oldListaTarefa.map((oldListaTarefa) => {
                      const newIsCompleted =
                        oldListaTarefa.title === ListaTarefa.title
                          ? !oldListaTarefa.isCompleted
                          : oldListaTarefa.isCompleted;
                      return {
                        ...oldListaTarefa,
                        isCompleted: newIsCompleted,
                      };
                    });
                  });
                }}
              />
              {ListaTarefa.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
