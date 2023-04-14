import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import {
  ITarefa,
  TarefasService,
} from "../../shared/services/api/tarefas/TarefasService";
import { APIException } from "../../shared/services/api/APIException";

export const ListasJson = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  useEffect(() => {
    TarefasService.getAll().then((result) => {
      if (result instanceof APIException) {
        alert(result.message);
      } else {
        setLista(result);
      }
    });
  }, []);

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
