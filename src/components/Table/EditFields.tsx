import { FC, ChangeEventHandler, KeyboardEventHandler, useEffect, useRef } from 'react';
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
  const { rowName, salary, equipmentCosts, overheads, estimatedProfit, id, isNew } = data;

  const { set_row_field, update_row } = useActions();

  const inputElRef = useRef<HTMLInputElement>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const el = e.target;
    const { value } = el;
    if (+value < 0) return console.error("Value can't be less than zero");

    const field = el.name as ChangableFieldsType;

    set_row_field(field, value, id);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      update_row(data);
    }
  };

  useEffect(() => {
    inputElRef.current?.focus();
  }, []);

  return (
    <>
      <div className='table__item-name'>
        <input
          value={rowName}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={inputElRef}
          name={'rowName'}
        />
      </div>
      <div className='table__item-salary'>
        <input
          value={salary}
          onChange={onChange}
          onKeyDown={onKeyDown}
          name={'salary'}
          type={'number'}
        />
      </div>
      <div className='table__item-equip'>
        <input
          value={equipmentCosts}
          onChange={onChange}
          onKeyDown={onKeyDown}
          name={'equipmentCosts'}
          type={'number'}
        />
      </div>
      <div className='table__item-overheads'>
        <input
          value={overheads}
          onChange={onChange}
          onKeyDown={onKeyDown}
          name={'overheads'}
          type={'number'}
        />
      </div>
      <div className='table__item-profit'>
        <input
          value={estimatedProfit}
          onChange={onChange}
          onKeyDown={onKeyDown}
          name={'estimatedProfit'}
          type={'number'}
        />
      </div>
    </>
  );
};

export default EditFields;
