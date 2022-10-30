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

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  // const iconArr = Object.values(Icons);

  return (
    <>
      <header className='header'>
        <a href='/' className='header__logo'>
          <Menu />
        </a>
        <a href='/' className='header__back'>
          <Back />
        </a>
        <nav className='header__nav'>
          <a href='/' className='header__nav-link active'>
            Просмотр
          </a>
          <a href='/' className='header__nav-link'>
            Управление
          </a>
        </nav>
      </header>

      <div className='container'>
        <nav className='nav'>
          <header className='nav__header'>
            {/* <div className='nav__header-left'>
              <h2>Название проекта</h2>
              <h3>Аббревиатура</h3>
            </div>
            <div className='nav__header-right'>
              <ArrowDown />
            </div> */}
            <h5>something</h5>
            <h5>something</h5>
            <h5>something</h5>
          </header>
          <main className='nav__main'>
            <ul className='nav__list'>
              {/* <div className='nav__item'>
              <div className='nav__item-icon'>
                <Tiles />
              </div>
              <h4 className='nav__item-icon'>СМП</h4>
            </div> */}
            </ul>
          </main>
        </nav>
        <section className='section'>
          <header className='section__header'>
            {/* <h1>Строительно-монтажные работы</h1> */}

            <h3>Строительно-монтажные работы</h3>
          </header>
          <main className='section__table'>
            {/* <header className='table__header'></header>
            <ul className='table__list'>
              <li className='table__list-item'></li>
            </ul> */}
          </main>
        </section>
      </div>
    </>
  );
};

export default App;

/*
  <Provider store={store}>
      <BrowserRouter basename='/'></BrowserRouter>
    </Provider>
  
  
  <Header />
        <div className='container'>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/address' element={<Address />} />
          </Routes>
        </div> */
