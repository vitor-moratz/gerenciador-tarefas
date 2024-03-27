import Head from 'next/head';
import Header from '@/components/header';
import '@styles/site.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gerenciador de Tarefas</title>
        <meta name="description" content="Um aplicativo para gerenciar suas tarefas de forma eficiente." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Bem-vindo ao Gerenciador de Tarefas</h1>
        <p>Aqui você pode gerenciar suas tarefas de forma eficiente.</p>
      </main>

      <footer>
        {/* Rodapé */}
      </footer>
    </div>
  );
}
