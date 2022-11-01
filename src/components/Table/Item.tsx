import { FC } from 'react';

import FolderOne from '../Icons/FolderOne';
import FolderTwo from '../Icons/FolderTwo';
import Document from '../Icons/Document';
import TrashBin from '../Icons/TrashBin';

interface OwnProps {
  type: 1 | 2 | 3;
  isBeingEdited?: boolean;
}

type Props = OwnProps;

const TableItem: FC<Props> = ({ type = 1, isBeingEdited = false }) => {
  const IconsElMap = [
    <div className='table__icons--folder-one'>
      <FolderOne />
    </div>,
    <div className='table__icons--folder-two'>
      <FolderTwo />
    </div>,
    <div className='table__icons--document'>
      <Document />
    </div>,
    <div className='table__icons--trashbin'>
      <TrashBin />
    </div>,
  ];

  return (
    <div className='table__item table__row'>
      <div className='table__item-level'>
        <div className='table__icons-container'>
          <div className='table__icons'>
            {IconsElMap.filter((el, i) => i >= type - 1)}
          </div>
          <div className='table__line table__line--parent'></div>
          <div className='table__line table__line--child'>
            <div></div>
            <div></div>
          </div>
          <div className='table__line table__line--sibling'>
            <div></div>
            <div></div>
          </div>
          <div className='table__line table__line--grandparent'></div>
        </div>
      </div>
      {isBeingEdited ? (
        <>
          <div className='table__item-name'>
            <input />
          </div>
          <div className='table__item-salary'>
            <input />
          </div>
          <div className='table__item-equip'>
            <input />
          </div>
          <div className='table__item-overheads'>
            <input />
          </div>
          <div className='table__item-profit'>
            <input />
          </div>
        </>
      ) : (
        <>
          <div className='table__item-name'>Южная строительная площадка </div>
          <div className='table__item-salary'>20 348</div>
          <div className='table__item-equip'>1 750</div>
          <div className='table__item-overheads'>108,07</div>
          <div className='table__item-profit'>1 209 122,5</div>
        </>
      )}
    </div>
  );
};

export default TableItem;

/* 
<div className='table__item-name'>
                    <input />
                  </div>
                  <div className='table__item-salary'>
                    <input />
                  </div>
                  <div className='table__item-equip'>
                    <input />
                  </div>
                  <div className='table__item-overheads'>
                    <input />
                  </div>
                  <div className='table__item-profit'>
                    <input />
                  </div>

*/

/* 
<div className='table__item table__row'>
                  <div className='table__item-level'>
                    <div className='table__item-icons'>
                      <div className='table__item-icons--folder-two'>
                        <FolderTwo />
                      </div>
                      <div className='table__item-icons--document'>
                        <Document />
                      </div>
                      <div className='table__item-icons--trashbin'>
                        <TrashBin />
                      </div>
                    </div>
                  </div>
                  <div className='table__item-name'>
                    <input />
                  </div>
                  <div className='table__item-salary'>
                    <input />
                  </div>
                  <div className='table__item-equip'>
                    <input />
                  </div>
                  <div className='table__item-overheads'>
                    <input />
                  </div>
                  <div className='table__item-profit'>
                    <input />
                  </div>
                </div>


*/
