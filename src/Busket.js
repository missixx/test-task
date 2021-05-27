import { connect } from "react-redux"
import BusketItem from './BusketItem'

function Busket(props) {

   const mapedItems = props.busketItems.map((item) => <BusketItem key={item.id} item={item}/>)

   return (
      <div>
         {mapedItems}
      </div>
   )
}

export default connect(state => ({ busketItems: state.busketItems }), dispatch => ({

}))
   (Busket)