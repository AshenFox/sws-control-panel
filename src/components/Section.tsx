import { FC } from 'react';
import Table from './Table';

interface OwnProps {}

type Props = OwnProps;

const Section: FC<Props> = () => {
  return (
    <section className='section'>
      <header className='section__header'>
        <div className='section__header-container'>
          <h1>Строительно-монтажные работы</h1>
        </div>
      </header>
      <main className='section__main'>
        <Table />
      </main>
    </section>
  );
};

export default Section;
