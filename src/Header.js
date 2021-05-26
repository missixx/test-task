import './Styles/header.css'

import FiltersBar from './FiltersBar.js'
import InfoBar from './InfoBar.js'


export default function Header() {
   return (
      <header className='header'>
         <InfoBar />
         <FiltersBar />
      </header>
   )
}
