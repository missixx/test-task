import './Styles/item.css'


export default function Item(props) {
   console.log(props.item.img);

   return (
      <div className='item'>
         <div className='item__img' style={{backgroundImage: `url(${props.item.img})`}}></div> 
         <div className='item__info'>
            <div className='item-name' >{props.item.name} </div>
            <div className='item-description'>{props.item.description}</div>
         </div>
         <button className='buy-btn'>SHOP ${props.item.price} 
         </button>
      </div >
   )
}

// 

//  style={{ backgroundImage: `url(${props.item.img})` }}