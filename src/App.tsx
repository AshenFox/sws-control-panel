import { useState } from 'react';
import { FC } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Address from './pages/Address';
import { Provider } from 'react-redux';
import store from './store/store';
import Menu from './components/Icons/Menu';
import Back from './components/Icons/Back';
import ArrowDown from './components/Icons/ArrowDown';
import Tiles from './components/Icons/Tiles';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  // const iconArr = Object.values(Icons);

  return (
    <>
      <Header />

      <div className='container'>
        <Nav />
        <Section />
      </div>
    </>
  );
};

export default App;
