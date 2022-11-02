import { FC } from 'react';
import ArrowDown from '../Icons/ArrowDown';
import Tiles from '../Icons/Tiles';

interface OwnProps {}

type Props = OwnProps;

const Nav: FC<Props> = () => {
  return (
    <nav className='nav'>
      <header className='nav__header'>
        <div className='nav__header-left'>
          <h2>Название проекта</h2>
          <h3>Аббревиатура</h3>
        </div>
        <div className='nav__header-right '>
          {/* active */}
          <ArrowDown />
        </div>
      </header>
      <main className='nav__main'>
        <ul className='nav__list active'>
          <li className='nav__item'>
            <Tiles />
            <h4>По проекту</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>Объекты</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>РД</h4>
          </li>
          <li className='nav__item active'>
            <Tiles />
            <h4>СМР</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>График</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>МиМ</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>Рабочие</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>Капвложения</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>Бюджет</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>Финансирование</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>Панорамы</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>Камеры</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>Поручения</h4>
          </li>
          <li className='nav__item'>
            <Tiles />
            <h4>Контрагенты</h4>
          </li>
        </ul>
      </main>
    </nav>
  );
};

export default Nav;
