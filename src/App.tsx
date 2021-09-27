// Importando dependências
import { BrowserRouter, Route } from 'react-router-dom';
// Importando páginas
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { AuthContextProvider } from './controllers/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Login} />
        <Route path="/profile" component={Profile} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;