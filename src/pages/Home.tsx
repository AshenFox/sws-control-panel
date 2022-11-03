import { FC } from 'react';
import Nav from '../components/Nav';
import Section from '../components/Section';

interface OwnProps {}

type Props = OwnProps;

const Home: FC<Props> = () => {
  return (
    <>
      <Nav />
      <Section />
    </>
  );
};

export default Home;
