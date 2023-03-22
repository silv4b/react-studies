import { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
  children: React.ReactNode;
}
export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

  const handleLogout = useCallback(() => {
    console.log('Logout executou');
  }, []);

  return(
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: '💖', logout: handleLogout }}> {/* valor inicial do contexto */}
      {children}
    </UsuarioLogadoContext.Provider>
  );
}