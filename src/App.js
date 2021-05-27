
import './Styles/app.css';

import Header from './Header.js'
import MainLayout from './MainLayout';


export default function App(props) {



  return (
    <div className="app">
      <div className='container'>
        <Header />
        <MainLayout/>
      </div>
    </div>
  );
}


 