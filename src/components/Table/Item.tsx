import { FC, ReactNode, CSSProperties } from 'react';
import FolderOne from '../Icons/FolderOne';
import FolderTwo from '../Icons/FolderTwo';
import Document from '../Icons/Document';
import TrashBin from '../Icons/TrashBin';
import LevelField from './LevelField';
import EditFields from './EditFields';
import Fields from './Fields';
import { RowInterface } from '../../store/reducers/main/mainInitState';
import { useAppSelector } from '../../store/hooks';

interface OwnProps {
  data: RowInterface;
  level: number;
}

type Props = OwnProps;

const Item: FC<Props> = ({ data, level }) => {
  const { table_width } = useAppSelector(({ main }) => main);
  const { isBeingEdited } = data;

  const itemStyle: CSSProperties = {
    width: `calc(${table_width}px - 13rem)`,
  };

  const borderStyle: CSSProperties = {
    width: `${table_width}px`,
  };

  return (
    <div className={`table__item-container`}>
      <LevelField data={data} level={level} />
      <div className='table__item table__item-row' style={itemStyle}>
        {isBeingEdited ? <EditFields data={data} /> : <Fields data={data} />}
      </div>
      <div className='table__item-border' style={borderStyle} />
      <div className='table__item-line'></div>
    </div>
  );
};

export default Item;
