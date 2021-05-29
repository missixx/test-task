import { connect } from "react-redux"
import BusketItem from './BusketItem'

function Busket(props) {

   const mapedItems = props.busketItems.map((item) => <BusketItem key={item.id} item={item} />)
   const totalAmount = props.busketItems.reduce((accumulator, current) => {
      return +accumulator + (current.itemsCount * current.price);
   }, [])

   const emptyBusket = () => {
      return (
         <h2>BUSKET IS EMPTY...</h2>
      )
   }

   const notEmptyBusket = () => {
      return (
         <h2>TOTAL AMOUNT: {totalAmount}</h2>
      )
   }

   return (
      <div>
         {mapedItems}
         {props.busketItems.length === 0 ? emptyBusket() : notEmptyBusket()}
      </div>
   )
}

export default connect(state => ({ busketItems: state.busketItems }), dispatch => ({

}))
   (Busket)