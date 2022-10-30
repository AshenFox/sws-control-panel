import { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Back: FC<Props> = () => {
  return (
    <svg viewBox='0 0 18 15' xmlns='http://www.w3.org/2000/svg'>
      <path d='M7 4V0L0 7L7 14V9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z' />
    </svg>
  );
};

export default Back;
