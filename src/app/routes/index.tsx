import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { Dashboard } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      {/* Formato antigo */}
      {/*
        <Switch>
          <Route exact path="/" component={() => <h1> Olá página nova.</h1>}/>
          <Route exact path="/some-page" component={SomePageCoponent}/>
        </Switch>
      */}
      {/* Formato novo */}
      {/*
        <Switch>
          <Route path="*" Component={() => <Navigate to="/somepage"/>}/>
          <Route path="/" Element={<Login />}/>
        </Switch> */}
      {/* 'redirect' -> 'navigate' |'component' -> 'element' */}

      <Switch>
        <Route path="/pagina-inicial" element={<Dashboard />} />
        {/* <Route path="*" element={<h1> Página Inicial</h1>} /> */}
        <Route path="*" element={ <Navigate to="pagina-inicial"/> } />
      </Switch>
    </BrowserRouter>
  );
};
