// Importando dependências
import { BrowserRouter, Route } from 'react-router-dom';
// Importando páginas
import { Login } from './pages/login';
import { Hospedagem } from './pages/hospedagem';
import { Profile } from './pages/Profile';
import { AuthContextProvider } from './controllers/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/login" exact component={Login} />
        <Route path="/hospedagem" component={Hospedagem} />
        <Route path="/profile" component={Profile} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;