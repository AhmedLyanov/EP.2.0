import { Link } from "react-router-dom"
import { ReactComponent as Logo } from '../../assets/media/logo.svg'
import s from './Header.module.css'
import CartIcon from "../CartIcon"
import { HEADER_TEXTS } from '../../constants/Header'

function Header() {
  return(
    <header className={s.header}>
      <div className={s.menu_wrapper}>
        <Link to={HEADER_TEXTS.PATHS.HOME} className={s.logo}>
          <Logo className={s.logo}/>
        </Link>
     
        <nav className={s.menu}>
          <Link to={HEADER_TEXTS.PATHS.HOME}>{HEADER_TEXTS.NAV_LINKS.MAIN_PAGE}</Link>
          <Link to={HEADER_TEXTS.PATHS.CATEGORIES}>{HEADER_TEXTS.NAV_LINKS.CATEGORIES}</Link>
          <Link to={HEADER_TEXTS.PATHS.PRODUCTS}>{HEADER_TEXTS.NAV_LINKS.ALL_PRODUCTS}</Link>
          <Link to={HEADER_TEXTS.PATHS.SALES}>{HEADER_TEXTS.NAV_LINKS.ALL_SALES}</Link>
        </nav>
      
        <Link to={HEADER_TEXTS.PATHS.CART}>
          <CartIcon className={s.cart_icon}/>
        </Link>
      </div>
    </header> 
  )
}

export default Header