import { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Header: FC<Props> = () => {
  return (
    <header className='table__header table__header-row'>
      <div>Уровень</div>
      <div>Наименование работ</div>
      <div>Основная з/п</div>
      <div>Оборудование</div>
      <div>Накладные расходы</div>
      <div>Сметная прибыль</div>
    </header>
  );
};

export default Header;
