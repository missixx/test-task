import { connect } from 'react-redux'
import './Styles/item.css'


function Item(props) {

   const handleAddToBusket = () => {
      props.onAddToBusket(props.item)
   }

   return (
      <div className='item'>
         <div className='item__img' style={{ backgroundImage: `url(${props.item.img})` }}></div>
         <div className='item__info'>
            <div className='item-name' >{props.item.name} </div>
            <div className='item-description'>{props.item.description}</div>
         </div>
         <button className='buy-btn' onClick={handleAddToBusket}>SHOP ${props.item.price}
         </button>
      </div >
   )
}

export default connect(state => ({}), dispatch => ({
   onAddToBusket: (item) => dispatch({ type: 'ADD_TO_BUSKET', payload: { item: item } })
}))(Item)

