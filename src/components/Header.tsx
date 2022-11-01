import { FC } from 'react';
import Back from './Icons/Back';
import Menu from './Icons/Menu';

interface OwnProps {}

type Props = OwnProps;

const Header: FC<Props> = () => {
  return (
    <header className='header'>
      <a href='/' className='header__logo'>
        <Menu />
      </a>
      <a href='/' className='header__back'>
        <Back />
      </a>
      <nav className='header__nav'>
        <a href='/' className='header__nav-link active'>
          Просмотр
        </a>
        <a href='/' className='header__nav-link'>
          Управление
        </a>
      </nav>
    </header>
  );
};

export default Header;
