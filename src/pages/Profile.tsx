// Importando dependências
import { useAuth } from '../hooks/useAuth';
// Importando estilos
import '../styles/global.css'
// Importando assets
// Importando componentes
// Importando controles

export function Profile() {

  const { user } = useAuth();

  return (
    <div>
      <h1>{user?.name}</h1>
      <h1>Perfil do usuário, deu certo!</h1>
    </div>
  )
};