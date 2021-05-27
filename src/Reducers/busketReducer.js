const initialState = [


]


export default function busketReducer(state = initialState, action) {
   switch (action.type) {
      case 'ADD_TO_BUSKET':
         console.log(state);
         return [...state, { ...action.payload.item }]


      default: return state
   }

}