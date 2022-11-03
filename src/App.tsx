import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import Home from './pages/Home';
import Control from './pages/Control';

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/control' element={<Control />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
