import { FC, ChangeEventHandler, KeyboardEventHandler, useEffect } from 'react';
import { useActions } from '../../store/hooks';
import {
  ChangableFieldsType,
  RowInterface,
} from '../../store/reducers/main/mainInitState';

interface OwnProps {
  data: RowInterface;
}

type Props = OwnProps;

const EditFields: FC<Props> = ({ data }) => {
  const { rowName, salary, equipmentCosts, overheads, estimatedProfit, id } = data;

  const { set_row_field, save_new_row } = useActions();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const el = e.target;
    const { value } = el;
    const field = el.name as ChangableFieldsType;

    set_row_field(field, value, id);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      console.log('Save!');
      save_new_row(data);
    }
  };

  return (
    <>
      <div className='table__item-name'>
        <input
          value={rowName}
          onChange={onChange}
          onKeyDown={onKeyDown}
          name={'rowName'}
        />
      </div>
      <div className='table__item-salary'>
        <input value={salary} onChange={onChange} onKeyDown={onKeyDown} name={'salary'} />
      </div>
      <div className='table__item-equip'>
        <input
          value={equipmentCosts}
          onChange={onChange}
          onKeyDown={onKeyDown}
          name={'equipmentCosts'}
        />
      </div>
      <div className='table__item-overheads'>
        <input
          value={overheads}
          onChange={onChange}
          onKeyDown={onKeyDown}
          name={'overheads'}
        />
      </div>
      <div className='table__item-profit'>
        <input
          value={estimatedProfit}
          onChange={onChange}
          onKeyDown={onKeyDown}
          name={'estimatedProfit'}
        />
      </div>
    </>
  );
};

export default EditFields;
