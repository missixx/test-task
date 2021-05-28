import { connect } from "react-redux"
import BusketItem from './BusketItem'

function Busket(props) {

   const mapedItems = props.busketItems.map((item) => <BusketItem key={item.id} item={item}/>)
   const totalAmount = props.busketItems.reduce((accumulator , current) => {
      return +accumulator + (current.itemsCount * current.price); 
   }, [])
   
   return (
      <div>
         {mapedItems}
         <h2>TOTAL AMOUNT: {totalAmount}</h2>
      </div>
   )
}

export default connect(state => ({ busketItems: state.busketItems }), dispatch => ({

}))
   (Busket)