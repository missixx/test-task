
import React from 'react';
import { connect } from 'react-redux';
import './Styles/filtersBar.css'

function FilterBar(props) {

   const selectByCategoryRef = React.createRef()
   const selectSortRef = React.createRef()

   const handleChangeSelectByCategory = () => {
      props.onChangeSelectByCategory(selectByCategoryRef.current.value)
   }

   const handleChangeSelectSort = () => {
      props.onChangeSelectSort(selectSortRef.current.value)
   }

   return (
      <div className='filters-bar'>
         <div className='filters-bar__inner'>
            <div className='shopAll'>Shop All</div>
            <div className='items'>100 items</div>
            <div className='filters'>
               <div className='filters__category'>
                  <div className='filters__name'>Categories:</div>
                  <form>
                     {/* //// здесь value={props.state.selectedByCategoryValue}  нужен для того чтобы сделать контролируемый селект,
                     /// иначе когда выбрана какая то категория и ты переходишь например в корзину и возвращаешься обратно,
                     /// элементы остаются отфильтрованными, но значение в селекте сбрасывается на All и даже при выборе All ничего не происходит */}
                     <select value={props.state.selectedByCategoryValue} className='filters__button' ref={selectByCategoryRef} onChange={handleChangeSelectByCategory}>
                        <option value=''> All</option>
                        <option value='Creams'>Creams</option>
                        <option value='Sprays'>Sprays</option>
                        <option value='Brushes'>Brushes</option>
                        <option value='Lipsticks'>Lipsticks</option>
                     </select>
                  </form>
               </div>
               <div className='filters__category'>
                  <div className='filters__name'>Sort by:</div>
                  <form>
                     <select className='filters__button' ref={selectSortRef} onChange={handleChangeSelectSort}>
                        <option value='NEWEST'>NEWEST</option>
                        <option value='OLDEST'>OLDEST</option>
                        <option value='LOW-PRICE'>BY PRICE(LOW)</option>
                        <option value='HIGH-PRICE'>BY PRICE(HIGH)</option>
                     </select>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}


export default connect((state) => ({ state: state }), (dispatch) => ({
   onChangeSelectByCategory: (value) => dispatch({ type: 'CHANGING_SELECT_BY_CATEGORY', payload: { value: value } }),
   onChangeSelectSort: (value) => dispatch({ type: 'CHANGING_SELECT_SORT', payload: { value: value } })
}))
   (FilterBar)
