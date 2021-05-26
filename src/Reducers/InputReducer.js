const initialState = ''

export default function inputReducer(state = initialState, action) {
   switch (action.type) {
      case 'CHANGING_INPUT':
         return action.payload.value
      default: return state
   }
}