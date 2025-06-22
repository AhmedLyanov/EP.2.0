import {ReactComponent as CartLogo} from '../../assets/media/cart.svg'
import s from './CartIcon.module.css'
import { useSelector } from 'react-redux'

function CartIcon() {

  const cartProducts = useSelector(store => store.cartProductIds)

  return (
    <div className={s.cart_logo}>
      <CartLogo/>
      {cartProducts.length > 0 && <div className={s.items_number}>{cartProducts.length}</div>}
    </div>
  )
}

export default CartIcon