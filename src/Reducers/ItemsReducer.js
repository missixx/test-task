const initialState = [
   {
      id: 1,
      date: '2012-01-26T13:51:50.417-07:00',
      category: 'Creams',
      img: "https://i.ibb.co/vxFnDJz/cream-img.png",
      name: 'Body Cream',
      description: 'Daily Oil Wash',
      price: 30,
      checked: false
   },
   {
      id: 2,
      date: '2013-01-26T13:51:50.417-07:00',
      category: 'Sprays',
      img: "https://i.ibb.co/8cYMYHm/spray-img.png",
      name: 'Face Spray',
      description: 'Eye and Lip Cream',
      price: 25,
      checked: false
   },
   {
      id: 3,
      date: '2012-05-26T13:51:50.417-07:00',
      category: 'Brushes',
      img: "https://i.ibb.co/b6f0XFB/brush-img.png",
      name: 'Tooth Brush',
      description: 'Oil serum',
      price: 15,
      checked: false
   }, {
      id: 4,
      date: '2012-01-26T13:55:50.417-07:00',
      category: 'Lipsticks',
      img: "https://i.ibb.co/J3sjwLQ/lipstick-img.png",
      name: 'Classic Lipstick',
      description: 'Hydrating Skin',
      price: 43,
      checked: false
   },
   {
      id: 5,
      date: '2015-01-26T13:51:50.417-07:00',
      category: 'Creams',
      img: "https://i.ibb.co/vxFnDJz/cream-img.png",
      name: 'Body Cream',
      description: 'Daily Oil Wash',
      price: 54,
      checked: false
   },
   {
      id: 6,
      date: '2010-01-26T13:51:50.417-07:00',
      category: 'Sprays',
      img: "https://i.ibb.co/8cYMYHm/spray-img.png",
      name: 'Face Spray',
      description: 'Eye and Lip Cream',
      price: 80,
      checked: false
   }, {
      id: 7,
      date: '2012-09-26T13:51:50.417-07:00',
      category: 'Brushes',
      img: "https://i.ibb.co/b6f0XFB/brush-img.png",
      name: 'Tooth Brush',
      description: 'Oil serum',
      price: 36,
      checked: false
   }, {
      id: 8,
      date: '2020-01-26T13:51:50.417-07:00',
      category: 'Lipsticks',
      img: "https://i.ibb.co/J3sjwLQ/lipstick-img.png",
      name: 'Classic Lipstick',
      description: 'Hydrating Skin',
      price: 10,
      checked: false
   }
   , {
      id: 9,
      date: '2009-01-26T13:51:50.417-07:00',
      category: 'Creams',
      img: "https://i.ibb.co/vxFnDJz/cream-img.png",
      name: 'Body Cream',
      description: 'Daily Oil Wash',
      price: 87,
      checked: false
   },
   {
      id: 10,
      date: '2007-01-26T13:51:50.417-07:00',
      category: 'Sprays',
      img: "https://i.ibb.co/8cYMYHm/spray-img.png",
      name: 'Face Spray',
      description: 'Eye and Lip Cream',
      price: 56,
      checked: false
   }, {
      id: 11,
      date: '1992-04-23T13:51:50.417-07:00',
      category: 'Brushes',
      img: "https://i.ibb.co/b6f0XFB/brush-img.png",
      name: 'Tooth Brush',
      description: 'Oil serum',
      price: 87,
      checked: false
   }, {
      id: 12,
      date: '2021-01-26T13:51:50.417-07:00',
      category: 'Lipsticks',
      img: "https://i.ibb.co/J3sjwLQ/lipstick-img.png",
      name: 'Classic Lipstick',
      description: 'Hydrating Skin',
      price: 94,
      checked: false
   }, {
      id: 13,
      date: '2012-01-26T13:34:50.417-07:00',
      category: 'Creams',
      img: "https://i.ibb.co/vxFnDJz/cream-img.png",
      name: 'Body Cream',
      description: 'Daily Oil Wash',
      price: 56,
      checked: false
   }

]

export default function itemsReducer(state = initialState, action) {
   switch (action.type) {
      case 'CHANGE_CHECKED_STATUS':
         const newState = state.map((item) => {
            if (item.id === action.payload.id) {
               return { ...item, checked: !item.checked }
            } else {
               return { ...item }
            }
         })
         return newState
      default: return state
   }
}