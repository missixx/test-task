import './Styles/busketItem.css'

export default function BusketItem(props) {
   return (
      <div>
      <div className='busket-item-block'>
         <div className='busket-item__img' style={{backgroundImage: `url(${props.item.img})`}}></div>
         <div className='busket-item__info'>
            <div className='busket-item__name'>{props.item.name}</div>
            <div className='busket-item__descr'>{props.item.description}</div>
         </div>
         <div className='busket-item__calc-block'>
            <span>-</span>
            <span>1</span>
            <span>+</span>
            </div>
         <div className='busket-item__price'>{props.item.price}</div>
      </div>
      <hr />
      </div>
   )
}