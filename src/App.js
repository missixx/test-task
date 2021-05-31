
import './Styles/app.css';

import Header from './Header.js'
import MainLayout from './MainLayout.js';
import Modal from './Modal.js';


export default function App(props) {

  

  return (
    <div className="app">
      <div className='container'>
        <Header />
        <MainLayout />
        <Modal />
      </div>
    </div>
  );
}


