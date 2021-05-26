import React from 'react';
import { connect } from 'react-redux'
import './Styles/infoBar.css'


function InfoBar(props) {

   let inputNode = React.createRef()

   const changingInput = () => {
      props.onChangingInput(inputNode.current.value)
   }

   return (
      <div className='infoBar'>
         <div className='infoBar__inner'>
         <div className='logo'>
            <div className='logo__img'></div>
         </div>
         <div className='info'>
            <div className='info__item'>
               <div className='info__name'><a href="www.google.ru">SHOP</a></div>
            </div>
            <div className='info__item'>
               <div className='info__name' ><a href="www.google.ru">OUR STORY</a></div>
            </div>
            <div className='info__item'>
               <div className='info__name'><a href="www.google.ru">CONTACT</a></div>
            </div>
         </div>
         <div className='searching'>
            <input type='search' className='searching__input' ref={inputNode} onChange={changingInput}></input>
            {/* <div className='searching__img'></div> */}
         </div>
         <div className='login'>
            <div className='login__btn'>Login</div>
         </div>
         <div className='busket'>
            <div className='busket__img'></div>
            <div className='busket__counter'></div>
         </div>
         </div>
      </div>
   )
}

export default connect(state => ({ state: state }), dispatch => ({
   onChangingInput: (value) => dispatch({ type: 'CHANGING_INPUT', payload: { value: value } })
}))
   (InfoBar)