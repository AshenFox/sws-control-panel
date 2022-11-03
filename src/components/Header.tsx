import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Back from './Icons/Back';
import Menu from './Icons/Menu';

interface OwnProps {}

type Props = OwnProps;

const Header: FC<Props> = () => {
  const { pathname } = useLocation();

  return (
    <header className='header'>
      <Link to={'/'} className='header__logo'>
        <Menu />
      </Link>
      <Link to={'/'} className='header__back'>
        <Back />
      </Link>
      <nav className='header__nav'>
        <Link to={'/'} className={`header__nav-link ${pathname === '/' ? 'active' : ''}`}>
          Просмотр
        </Link>
        <Link
          to={'/control'}
          className={`header__nav-link ${pathname === '/control' ? 'active' : ''}`}
        >
          Управление
        </Link>
      </nav>
    </header>
  );
};

export default Header;
