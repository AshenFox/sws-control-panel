import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import Tiles from '../Icons/Tiles';

interface OwnProps {}

type Props = OwnProps;

const List: FC<Props> = () => {
  const { is_menu_open } = useAppSelector(({ main }) => main);

  return (
    <ul className={`nav__list ${is_menu_open ? 'active' : ''}`}>
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
  );
};

export default List;
