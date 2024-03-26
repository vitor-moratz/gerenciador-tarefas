import '@styles/login.css';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="login-page">
        <div className="form">
          <form className="login-form" method="post">
            <h2>Gerenciador de Tarefas</h2>
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Senha" required />
            <a className="btn" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Entrar
            </a>
            <p className="message">Não tem uma conta? <Link href="/register">Crie agora</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}
