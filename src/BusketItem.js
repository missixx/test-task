import { connect } from 'react-redux'
import './Styles/busketItem.css'

function BusketItem(props) {

   const handleAddToBusket = () => {
      props.onDelFromBusket(props.item)
      props.onChangingCheckedStatus(props.item.id)
   }

   const handleItemCountIncrem = () => {
      props.onItemCountIncrem(props.item)
   }

   const handleItemCountDecrem = () =>{
      props.onItemCountDecrem(props.item)
   }


   return (
      <div>
         <div className='busket-item-block'>
            <div className='busket-item__img' style={{ backgroundImage: `url(${props.item.img})` }}></div>
            <div className='busket-item__info'>
               <div className='busket-item__name'>{props.item.name}</div>
               <div className='busket-item__descr'>{props.item.description}</div>
            </div>
            <div className='busket-item__calc-block'>
               <span onClick={handleItemCountDecrem} className='busket-item__minus'>-</span>
               <span>{props.item.itemsCount}</span>
               <span onClick={handleItemCountIncrem} className='busket-item__plus'>+</span>
            </div>
            {/* <div className='busket-item__count'>
               <span>{}</span>
            </div> */}
            <span>x</span>
            <div className='busket-item__price'>{props.item.price}$</div>
            <div className='busket-item__result'>
               <span>amount: {props.item.itemsCount * props.item.price}$</span>
            </div>
            <div className='busket-item__delete'>
               <span onClick={handleAddToBusket}>X</span>
            </div>
         </div>
         <hr />
      </div>
   )
}

export default connect(state => ({}), dispatch => ({
   onDelFromBusket: (item) => dispatch({ type: 'DELETE_FROM_BUSKET', payload: { item: item } }),
   onChangingCheckedStatus: (id) => dispatch({ type: 'CHANGE_CHECKED_STATUS', payload: { id: id } }),
   onItemCountIncrem: (item) => dispatch({ type: 'ITEM_COUNT_INCREMENT', payload: { item: item } }),
   onItemCountDecrem: (item) => dispatch({ type: 'ITEM_COUNT_DECREMENT', payload: { item: item } }),

}))(BusketItem)


