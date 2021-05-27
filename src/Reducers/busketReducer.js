const initialState = [


]


export default function busketReducer(state = initialState, action) {
   switch (action.type) {
      case 'ADD_TO_BUSKET':
         if (!action.payload.item.checked) {
            return [...state, { ...action.payload.item }]
         } else {
            const newState = state.filter(item => item.id !== action.payload.item.id)
            return newState
         }
      default: return state
   }

}