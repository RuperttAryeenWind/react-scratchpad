import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar/Header';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/common/Footer';
import AppContainer from './containers/common/AppContainer';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <AppContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
