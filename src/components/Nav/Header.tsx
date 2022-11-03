import { FC, MouseEventHandler } from 'react';
import { useActions, useAppSelector } from '../../store/hooks';
import ArrowDown from '../Icons/ArrowDown';

interface OwnProps {}

type Props = OwnProps;

const Header: FC<Props> = () => {
  const { is_menu_open } = useAppSelector(({ main }) => main);

  const { set_is_menu_open } = useActions();

  const onHeaderClick: MouseEventHandler<HTMLDivElement> = (e) => {
    set_is_menu_open(!is_menu_open);
  };

  return (
    <header className='nav__header' onClick={onHeaderClick}>
      <div className='nav__header-left'>
        <h2>Название проекта</h2>
        <h3>Аббревиатура</h3>
      </div>
      <div className={`nav__header-right ${is_menu_open ? 'active' : ''}`}>
        <ArrowDown />
      </div>
    </header>
  );
};

export default Header;
