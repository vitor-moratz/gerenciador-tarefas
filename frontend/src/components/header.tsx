import Link from 'next/link';
import '@styles/site.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
