const initialState = {
   isActive: false
}

export default function modalReducer(state = initialState, action) {
   switch (action.type) {
      case 'CLOSE_MODAL':
         return { isActive: false }
      case 'OPEN_MODAL':
         return { isActive: true, item: action.payload.item }
      default: return state
   }
}