import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { ITarefa, TarefasService } from "../../shared/services/api/tarefas/TarefasService";
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
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (evt) => {
      if (evt.key === "Enter") {
        if (evt.currentTarget.value.trim().length === 0) return;

        const value = evt.currentTarget.value;
        evt.currentTarget.value = "";

        if (lista.some((ListItem) => ListItem.title === value)) return;

        TarefasService.create({ title: value, isCompleted: false }).then((result) => {
          if (result instanceof APIException) {
            alert("APIException: " + result.message);
          } else {
            setLista((oldLista) => [...oldLista, result]);
          }
        });
      }
    },
    [lista]
  );

  const handleToggleComplete = useCallback(
    (id: number) => {
      const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);

      if (!tarefaToUpdate) return; // se n achar a tarefa pra atualizar (undefined) retorna nada

      // alteracao na API
      TarefasService.updateById(id, {
        ...tarefaToUpdate,
        isCompleted: !tarefaToUpdate.isCompleted,
      }).then((result) => {
        if (result instanceof APIException) {
          alert("APIException: " + result.message);
        } else {
          // se der certo, altera o state da lista local
          setLista((oldListaTarefa) => {
            return oldListaTarefa.map((oldListaTarefa) => {
              if (oldListaTarefa.id === id) return result;
              return oldListaTarefa;
            });
          });
        }
      });
    },
    [lista]
  );

  const handleDelete = useCallback((id: number) => {
    // alteracao na API
    TarefasService.deteleById(id).then((result) => {
      if (result instanceof APIException) {
        alert("APIException: " + result.message);
      } else {
        // se der certo, altera o state da lista local, filtrando a lista, removendo a tarefa deletada
        setLista((oldListaTarefa) => {
          return oldListaTarefa.filter((oldListaTarefa) => oldListaTarefa.id !== id);
        });
      }
    });
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
                onChange={() => handleToggleComplete(ListaTarefa.id)}
              />
              Id : {ListaTarefa.id} - Descrição : {ListaTarefa.title}{" "}
              <button onClick={() => handleDelete(ListaTarefa.id)}> x </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
