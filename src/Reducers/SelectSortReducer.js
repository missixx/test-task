
const initialState = 'NEWEST'

export default function selectSortReducer(state = initialState, action) {
   switch (action.type) {
      case 'CHANGING_SELECT_SORT':
         return action.payload.value
      default: return state
   }
}