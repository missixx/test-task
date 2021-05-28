const initialState = [


]


export default function busketReducer(state = initialState, action) {
   switch (action.type) {
      case 'ADD_TO_BUSKET':
         if (!action.payload.item.checked) {
            return [...state, { ...action.payload.item, itemsCount: 1 }]
         } else {
            const newState = state.filter(item => item.id !== action.payload.item.id)
            return newState
         }
      case 'DELETE_FROM_BUSKET':
         const newState = state.filter(item => item.id !== action.payload.item.id)
         return newState
      case 'ITEM_COUNT_INCREMENT':
         const changedIncrState = state.map((item) => {
            if (item.id === action.payload.item.id) {
               return { ...item, itemsCount: item.itemsCount + 1 }
            } else {
               return item
            }
         })
         return changedIncrState
      case 'ITEM_COUNT_DECREMENT':
         const changedDecrState = state.map((item) => {
            if ((item.id === action.payload.item.id) && (item.itemsCount > 1)) {
                  return { ...item, itemsCount: item.itemsCount - 1 }
            } else {
               return item
            }
         })
         return changedDecrState
      default: return state
   }

}