
import './Styles/app.css';

import Header from './Header.js'
import Content from './Content.js'


export default function App(props) {



  return (
    <div className="app">
      <div className='container'>
        <Header />
        <Content />

      </div>
    </div>
  );
}


 