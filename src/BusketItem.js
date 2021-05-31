import { connect } from 'react-redux'
import './Styles/busketItem.css'

function BusketItem(props) {

 
   const handleItemCountIncrem = () => {
      props.onItemCountIncrem(props.item)
   }

   const handleItemCountDecrem = () => {
      props.onItemCountDecrem(props.item)
   }

   const handleOpenModal = () =>{
      props.onOpenModal(props.item)
   }


   return (
      <div>
         <div className='busket-item'>
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
               <div className='busket-item__delete-block' onClick={handleOpenModal}>X
               {/* <span  className='busket-item__delete-btn'>X</span> */}
               </div>
         </div>
         <hr />
      </div>
   )
}

export default connect(state => ({}), dispatch => ({
   onOpenModal: (item) => dispatch({ type: 'OPEN_MODAL', payload: {item: item} }),
   onItemCountIncrem: (item) => dispatch({ type: 'ITEM_COUNT_INCREMENT', payload: { item: item } }),
   onItemCountDecrem: (item) => dispatch({ type: 'ITEM_COUNT_DECREMENT', payload: { item: item } }),

}))(BusketItem)


