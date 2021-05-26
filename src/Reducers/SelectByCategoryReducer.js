const initialState = ''

export default function selectByCategoryReducer(state = initialState, action) {
   switch (action.type) {
      case 'CHANGING_SELECT_BY_CATEGORY':
         return action.payload.value
      default: return state
   }
}