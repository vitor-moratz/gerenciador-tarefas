'use client'
import { useState } from 'react';
import '@styles/login.css';
import Link from 'next/link';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [CreateUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
        const res = await CreateUserWithEmailAndPassword(email, password)
        console.log({res})
        setUsername('');
        setEmail('');
        setPassword('');
    } catch(e){
        console.error(e)
    }
};

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="login-page">
        <div className="form">
          <form className="login-form" method="POST">
            <h2>Gerenciador de Tarefas</h2>
            <input type="text" placeholder="Nome" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <a onClick={handleSignUp} className="btn" href="/login">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Criar Conta
            </a>
            <p className="message">Já tem uma conta? <Link href="/login">Faça Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;