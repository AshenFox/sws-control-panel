import { FC, MouseEventHandler } from 'react';
import { useActions } from '../../store/hooks';
import { RowInterface } from '../../store/reducers/main/mainInitState';
import Document from '../Icons/Document';
import FolderOne from '../Icons/FolderOne';
import FolderTwo from '../Icons/FolderTwo';
import TrashBin from '../Icons/TrashBin';

interface OwnProps {
  level: number;
  data: RowInterface;
}

type Props = OwnProps;

const LevelField: FC<Props> = ({ data, level }) => {
  const { id, isBeingEdited, isNew } = data;

  const { create_new_row, delete_row } = useActions();

  const createRow =
    (id: number | null): MouseEventHandler<HTMLDivElement> =>
    (e) => {
      if (level <= 2 && !isBeingEdited) create_new_row(id);
    };

  const deleteRow: MouseEventHandler<HTMLDivElement> = (e) => {
    delete_row(id, isNew);
  };

  return (
    <div className='table__item-level'>
      <div className='table__icons-container'>
        <div className='table__icons'>
          {level <= 1 && (
            <div className='table__icons--folder-one' onClick={createRow(null)}>
              <FolderOne />
            </div>
          )}
          {level <= 2 && (
            <div className='table__icons--folder-two' onClick={createRow(id)}>
              <FolderTwo />
            </div>
          )}
          {level <= 3 && (
            <div className='table__icons--document' onClick={createRow(id)}>
              <Document />
            </div>
          )}
          <div className='table__icons--trashbin' onClick={deleteRow}>
            <TrashBin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelField;
