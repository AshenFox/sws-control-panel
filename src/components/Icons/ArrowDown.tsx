import { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const ArrowDown: FC<Props> = () => {
  return (
    <svg viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z' />
    </svg>
  );
};

export default ArrowDown;
