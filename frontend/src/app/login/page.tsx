'use client'
import { useState } from 'react';
import '@styles/login.css';
import Link from 'next/link';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInUserWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
        const res = await signInUserWithEmailAndPassword(email, password)
        console.log({res})
        setEmail('');
        setPassword('');
        router.push('/')
    } catch(e){
        console.error(e)
    }
};

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="login-page">
        <div className="form">
          <form className="login-form" method="post">
            <h2>Gerenciador de Tarefas</h2>
            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <a onClick={handleSignIn} className="btn" href="/alltasks">
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

export default SignIn;