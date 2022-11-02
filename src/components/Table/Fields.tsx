import { FC } from 'react';
import { RowInterface } from '../../store/reducers/main/mainInitState';

interface OwnProps {
  data: RowInterface;
}

type Props = OwnProps;

const Fields: FC<Props> = ({ data }) => {
  const { rowName, salary, equipmentCosts, overheads, estimatedProfit } = data;
  return (
    <>
      <div className='table__item-name'>{rowName}</div>
      <div className='table__item-salary'>{salary}</div>
      <div className='table__item-equip'>{equipmentCosts}</div>
      <div className='table__item-overheads'>{overheads}</div>
      <div className='table__item-profit'>{estimatedProfit}</div>
    </>
  );
};

export default Fields;

/* 
<div className='table__item-name'>Южная строительная площадка</div>
      <div className='table__item-salary'>20 348</div>
      <div className='table__item-equip'>1 750</div>
      <div className='table__item-overheads'>108,07</div>
      <div className='table__item-profit'>1 209 122,5</div>


*/
