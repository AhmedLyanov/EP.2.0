import { Link } from "react-router-dom"
import {ReactComponent as Logo} from '../../assets/media/logo.svg'
import s from './Header.module.css'
import CartIcon from "../CartIcon"


function Header() {

  return(
    <header className={s.header}>
      <div className={s.menu_wrapper}>
        <Link to={'/'} className={s.logo}>
          <Logo className={s.logo}/>
        </Link>
     
        <nav className={s.menu}>
          <Link to={'/'}>Main Page</Link>
          <Link to={'/categories'}>Categories</Link>
          <Link to={'/products/all'}>All products</Link>
          <Link to={'products/sales'}>All sales</Link>
        </nav>
      
        <Link to={'/cart'}>
          <CartIcon className={s.cart_icon}/>
        </Link>
      </div>
    </header> 
  )
}

export default Header