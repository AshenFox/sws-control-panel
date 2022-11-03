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
