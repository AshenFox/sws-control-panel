import React from 'react';
import TableItem from './Item';

const Table = () => {
  return (
    <div className='table__container'>
      <div className='table'>
        <header className='table__header table__row'>
          <div>Уровень</div>
          <div>Наименование работ</div>
          <div>Основная з/п</div>
          <div>Оборудование</div>
          <div>Накладные расходы</div>
          <div>Сметная прибыль</div>
        </header>
        <TableItem type={1} />
        <TableItem type={2} />
        <TableItem type={3} isBeingEdited={true} />
      </div>
    </div>
  );
};

export default Table;
