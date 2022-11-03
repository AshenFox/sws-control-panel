import { FC } from 'react';
import Header from './Header';
import List from './List';

interface OwnProps {}

type Props = OwnProps;

const Nav: FC<Props> = () => {
  return (
    <nav className='nav'>
      <Header />
      <main className='nav__main'>
        <List />
      </main>
    </nav>
  );
};

export default Nav;
