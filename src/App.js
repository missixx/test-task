
import './Styles/app.css';

import Header from './Header.js'
import Content from './Content.js'
import RouterComponent from './RouterComponent';


export default function App(props) {



  return (
    <div className="app">
      <div className='container'>
        <Header />
        <RouterComponent/>
      </div>
    </div>
  );
}


 