import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './Styles/infoBar.css'


function InfoBar(props) {

   let inputNode = React.createRef()

   const changingInput = () => {
      props.onChangingInput(inputNode.current.value)
   }

   return (
      <div className='infoBar'>
         <div className='infoBar__inner'>
            <div className='logo-block'>
               <Link to='/'><div className='logo'></div></Link>
            </div>
            <div className='info'>
               <div className='info__item'>
                  <div className='info__name'><Link to='/'>SHOP</Link></div>
               </div>
               <div className='info__item'>
                  <div className='info__name' ><Link to='/ourstory'>OUR STORY</Link></div>
               </div>
               <div className='info__item'>
                  <div className='info__name'><Link to='/contacts'>CONTACT</Link></div>
               </div>
            </div>
            <div className='searching'>
               <input type='search' className='searching__input' ref={inputNode} onChange={changingInput}></input>
            </div>
            <div className='login'>
               <div className='login__btn'>Login</div>
            </div>
            <div className='busket'>
               <Link to='/busket'> <div className='busket__img'></div></Link>
               <div className={props.state.busketItems.length > 0 ? 'busket__counter' : 'busket__counter--none'}>{props.state.busketItems.length}</div>
         </div>
      </div>
      </div >
   )
}

export default connect(state => ({ state: state }), dispatch => ({
   onChangingInput: (value) => dispatch({ type: 'CHANGING_INPUT', payload: { value: value } })
}))
   (InfoBar)