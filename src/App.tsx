import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className='container'>
        <Nav />
        <Section />
      </div>
    </Provider>
  );
};

export default App;
