import { FC, useEffect, useRef } from 'react';
import { useActions, useAppSelector } from '../../store/hooks';
import { RowListType } from '../../store/reducers/main/mainInitState';
import Header from './Header';
import Item from './Item';

interface OwnProps {}

type Props = OwnProps;

const Table: FC<Props> = () => {
  const { row_list, is_loading } = useAppSelector(({ main }) => main);

  const { get_row_list, set_table_width, create_new_row } = useActions();

  const tableElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    get_row_list();
  }, []);

  useEffect(() => {
    if (!row_list.length && !is_loading) create_new_row(null);
  }, [row_list, is_loading]);

  useEffect(() => {
    const el = tableElRef.current;

    const observer = new ResizeObserver((entries) => {
      if (entries.length) {
        const [
          {
            contentRect: { width },
          },
        ] = entries;

        set_table_width(width);
      }
    });

    if (el) observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const mapRowList = (rowList: RowListType, level: number = 0) => {
    level += 1;

    const result = rowList.map((row) => {
      const { child, id } = row;

      const isParent = !!child.length;
      return (
        <div className='table__li' key={id}>
          {isParent && <div className='table__sub'>{mapRowList(child, level)}</div>}
          <Item data={row} level={level} />
        </div>
      );
    });

    return result;
  };

  return (
    <div className='table__container'>
      <div className='table' ref={tableElRef}>
        <Header />
        {!is_loading && mapRowList(row_list)}
      </div>
    </div>
  );
};

export default Table;
