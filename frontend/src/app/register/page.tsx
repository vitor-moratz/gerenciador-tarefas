import '@styles/login.css';
import Link from 'next/link';

export default function RegistroPage() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="login-page">
        <div className="form">
          <form className="login-form" method="POST">
            <h2>Gerenciador de Tarefas</h2>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Senha" required />
            <a className="btn" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Criar Conta
            </a>
            <p className="message">Já tem uma conta? <Link href="http://localhost:3000/">Faça Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}
