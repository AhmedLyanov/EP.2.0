import { Link } from 'react-router-dom'
import s from './CartPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCartProducts } from '../../utils/products'
import Button from '../../components/Button/Button'
import CartItem from '../../components/CartItem'
import OrderForm from '../../components/OrderForm'
import Modal from '../../components/Modal'
import { CART_TEXTS } from '../../constants/CartPage'

function CartPage() {
  const cartProducts = useSelector(store => store.cart)
  const dispatch = useDispatch()
  const cartProductsIds = useSelector(store => store.cartProductsIds)

  useEffect(() => {
    dispatch(fetchCartProducts()) 
  }, [cartProductsIds])

  return (
    <main className={s.wrapper}>
      <Modal />
      <div className={s.header}>
        <h1 className={s.header_text}>{CART_TEXTS.HEADER.TITLE}</h1>
        <div className={s.header_navigation}>
          <div className={s.decoration_line}></div>
          <Link to={'/products/all'}>
            <div className={s.navigation_button}>{CART_TEXTS.HEADER.BACK_BUTTON}</div>
          </Link>
        </div>
      </div>
      {cartProducts.length === 0 && 
        <div className={s.empty_cart}>
          <p className={s.message_text}>{CART_TEXTS.EMPTY_CART.MESSAGE}</p>
          <Link to={'/categories'}>
            <Button title={CART_TEXTS.EMPTY_CART.BUTTON_TEXT} />
          </Link>
        </div>
      }
      {cartProducts.length > 0 &&
        <div className={s.cart_information}>
          <div className={s.cart_list}>
            {cartProducts.map(elem => <CartItem key={elem.id} product={elem} />)}
          </div>
          <OrderForm 
            orderItems={cartProducts.length}
            orderSum={
              cartProducts.reduce((sum, product) => {
                return sum + product.count * (product.discont_price ? product.discont_price : product.price)
              }, 0)
            }
          />
        </div>
      }
    </main>
  )
}

export default CartPage