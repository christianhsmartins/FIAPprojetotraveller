// Importando dependências
import { useAuth } from '../hooks/useAuth';
import '../controllers/AuthContext';
// Importando estilos
import '../styles/global.css'
import '../styles/profile.css'
// Importando assets
// Importando componentes
// Importando controles

export function Profile() {

  const { user } = useAuth();

  return (
    <div>
      <main>
        <section>
          <img src={user?.avatar} alt="" />
          <div className="info">
            <h1>Nome do usuário: {user?.name}</h1>
          </div>
        </section>
      </main>
    </div>
  )
};