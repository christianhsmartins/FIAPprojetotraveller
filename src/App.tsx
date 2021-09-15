// Importando dependências
import { BrowserRouter, Route } from 'react-router-dom';
// Importando páginas
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Profile } from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/rooms/new" component={Cadastro} />
      <Route path="/rooms/new" component={Profile} />
    </BrowserRouter>
  );
}

export default App;