import { connect } from "react-redux";

import './Styles/content.css';


import Item from './Item.js'
import FiltersBar from "./FiltersBar";

function Content(props) {

   const mapedItems = props.items.map((item) => <Item key={item.id} item={item} />)

   return (
      <div>
         <FiltersBar />
         <div className='items-container'> {mapedItems}</div>
      </div>
   )
}

//////// sortFunction принимает необходимый для сортировки массив и стэйт чтобы знать как сортировать, 
////////  и в зависимости от стейта(в стейт записывается выбранное значение select'а ) выбирает необходимую соритровку
///////// 

const sortFunction = (array, state) => {
   switch (state.selectSortValue) {
      case 'OLDEST':
         const arrayCopyToOldestSort = array.slice()
         arrayCopyToOldestSort.sort((a, b) => new Date(a.date) - new Date(b.date));
         return arrayCopyToOldestSort
      case 'NEWEST':
         const arrayCopyToNewstSort = array.slice()
         arrayCopyToNewstSort.sort((a, b) => new Date(b.date) - new Date(a.date));
         return arrayCopyToNewstSort
      case 'LOW-PRICE':
         const arrayCopyToLowPriceSort = array.slice()
         arrayCopyToLowPriceSort.sort((a, b) => new Date(a.price) - new Date(b.price));
         return arrayCopyToLowPriceSort
      case 'HIGH-PRICE':
         const arrayCopyToHighPriceSort = array.slice()
         arrayCopyToHighPriceSort.sort((a, b) => new Date(b.price) - new Date(a.price));
         return arrayCopyToHighPriceSort
      default: return array
   }
}

//////////////////////////////////////
///////////// в mapStateToProps сначала применяется фильтр по категориям filteredByCategoryArray, затем этот же получившийся 
//////////// массив проходит через фильтр поисковой строки, затем получившийся массив отправляется в сортировочную функцию 
//////////// sortFunction, вернувшийся массив записывается в items и в виде пропса передаётся в компонент

const mapStateToProps = (state) => {
   const filteredByCategoryArray = state.items.filter((item) => { return item.category.includes(state.selectedByCategoryValue) });
   const filteredBySearchInputArray = filteredByCategoryArray.filter((item) => { return item.name.toUpperCase().includes(state.searchInputValue.toUpperCase()) });
   const sortedBySelectSort = sortFunction(filteredBySearchInputArray, state)
   return { items: sortedBySelectSort }
}



export default connect(mapStateToProps, null)
   (Content)


