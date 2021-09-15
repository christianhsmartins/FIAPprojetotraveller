// Importando dependências
import { firebase, auth } from '../auth/firebase';
import { useHistory } from 'react-router-dom';
// Importando estilos
import '../styles/login.css';
// Importando assets
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import illustrationImg from '../assets/images/illustration.svg';
// Importando componentes
import { Button } from '../components/Button';
// Importando controles

export function Login() {

  const history = useHistory();

  function handleLoginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      console.log(result);
    });

    history.push('/profile');
  }; 

  return (
    <div id="content">
      <main>
        <img src={logoImg} alt="Projeto Traveller" />
        <button onClick={handleLoginWithGoogle}>
          <img src={googleIconImg} alt="Logo do Google" />
          Entrar com Google
        </button>
        <div className="separator">
          <p>ou se preferir</p>
        </div>
        <form action="">
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <input type="password" name="senha" id="senha" placeholder="Senha" />
          <Button>Entrar</Button>
        </form>
      </main>
      <aside>
        <img src={illustrationImg} alt="Imagem" />
      </aside>
    </div>
  )
}