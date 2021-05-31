import { connect } from 'react-redux'
import './Styles/modal.css'

function Modal(props) {

   const handleAddToBusket = () => {
      props.onDelFromBusket(props.modal.item)
      props.onChangingCheckedStatus(props.modal.item.id)
      props.onCloseModal()
   }

   return (
      <div className={props.modal.isActive ? 'modal' : 'modal--none'}>
         <div className='modal-inner'>
            <div className='modal__background'></div>
            <div className='modal__window'>
               <div className='modal__topper' onClick={props.onCloseModal}>X</div>
               <div className='modal__wrapper'>
                  <div className='modal__text'>Are you sure?</div>
               </div>
               <div className='modal__wrapper'>
                  <div className='modal__buttons'>
                     <button onClick={handleAddToBusket}>OK</button>
                     <button onClick={props.onCloseModal}>CANCEL</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default connect(state => ({ modal: state.modal }), dispatch => ({
   onDelFromBusket: (item) => dispatch({ type: 'DELETE_FROM_BUSKET', payload: { item: item } }),
   onChangingCheckedStatus: (id) => dispatch({ type: 'CHANGE_CHECKED_STATUS', payload: { id: id } }),
   onCloseModal: () => dispatch({ type: 'CLOSE_MODAL' })
}))
   (Modal)