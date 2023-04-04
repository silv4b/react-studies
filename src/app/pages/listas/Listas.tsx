import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

interface IItemLista {
  title: string;
  isSelected: boolean;
}

export const Listas = () => {
  const [lista, setLista] = useState<IItemLista[]>([]);

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
          if (oldLista.some((ListItem) => ListItem.title === value))
            return oldLista;
          return [
            ...oldLista,
            {
              title: value,
              isSelected: false,
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
      <p>{lista.filter((ListItem) => ListItem.isSelected).length}</p>
      <ul>
        {lista.map((ListItem) => {
          return (
            <li key={ListItem.title}>
              <input
                type="checkbox"
                checked={ListItem.isSelected}
                onChange={() => {
                  setLista((oldLista) => {
                    return oldLista.map((oldListItem) => {
                      const newIsSelected =
                        oldListItem.title === ListItem.title
                          ? !oldListItem.isSelected
                          : oldListItem.isSelected;
                      return {
                        ...oldListItem,
                        isSelected: newIsSelected,
                      };
                    });
                  });
                }}
              />
              {ListItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
