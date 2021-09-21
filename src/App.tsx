// Importando dependências
import { BrowserRouter, Route } from 'react-router-dom';
// Importando páginas
import { Login } from './pages/Login';
import { Hospedagem } from './pages/Hospedagem';
import { Profile } from './pages/Profile';
import { AuthContextProvider } from './controllers/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Login} />
        <Route path="/hospedagem" component={Hospedagem} />
        <Route path="/profile" component={Profile} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;