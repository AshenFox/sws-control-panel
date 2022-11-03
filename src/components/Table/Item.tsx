import { FC, CSSProperties, useState, MouseEventHandler } from 'react';
import LevelField from './LevelField';
import EditFields from './EditFields';
import Fields from './Fields';
import { RowInterface } from '../../store/reducers/main/mainInitState';
import { useActions, useAppSelector } from '../../store/hooks';

interface OwnProps {
  data: RowInterface;
  level: number;
}

type Props = OwnProps;

const Item: FC<Props> = ({ data, level }) => {
  const { table_width } = useAppSelector(({ main }) => main);
  const { isBeingEdited, id } = data;

  const { set_is_being_edited } = useActions();

  const [isClicked, setIsClicked] = useState(false);

  const itemStyle: CSSProperties = {
    width: `calc(${table_width}px - 13rem)`,
  };

  const borderStyle: CSSProperties = {
    width: `${table_width}px`,
  };

  const onItemClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isClicked) setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 200);

    if (isClicked) set_is_being_edited(true, id);
  };

  return (
    <div className={`table__item-container`}>
      <LevelField data={data} level={level} />
      <div
        className='table__item table__item-row'
        style={itemStyle}
        onClick={onItemClick}
      >
        {isBeingEdited ? <EditFields data={data} /> : <Fields data={data} />}
      </div>
      <div className='table__item-border' style={borderStyle} />
      <div className='table__item-line'></div>
    </div>
  );
};

export default Item;
