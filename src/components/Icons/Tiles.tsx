import { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Tiles: FC<Props> = () => {
  return (
    <svg viewBox='0 0 17 17' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 9.16667H7.33333V0H0V9.16667ZM0 16.5H7.33333V11H0V16.5ZM9.16667 16.5H16.5V7.33333H9.16667V16.5ZM9.16667 0V5.5H16.5V0H9.16667Z' />
    </svg>
  );
};

export default Tiles;
