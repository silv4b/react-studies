import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom";
import { Dashboard, Login, Listas } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" element={<Dashboard />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/listas" element={<Listas />} />

        {/* <Route path="*" element={<h1> Página Inicial</h1>} /> */}
        <Route path="*" element={ <Navigate to="pagina-inicial"/> } />
      </Switch>
    </BrowserRouter>
  );
};
