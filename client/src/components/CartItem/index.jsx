import { BASE_URL } from '../../utils/backendconfig'
import s from './CartItem.module.css'
import { ReactComponent as Plus } from '../../assets/media/plus.svg'
import { ReactComponent as Minus } from '../../assets/media/minus.svg'
import { ReactComponent as Close } from '../../assets/media/close.svg'
import { formatter } from '../..'
import { useDispatch } from 'react-redux'
import { decrCartProductCounterAction, incrCartProductCounterAction, removeCartItemAction } from '../../store/cartReducer'
import { addProductToCartAction, delProductInCartAction } from '../../store/cartProductIdsReducer'


function CartItem({product}) {

  const dispatch = useDispatch()


  return (
    <div className={s.wrapper}>
      <div className={s.image_wrapper}>
        <div className={s.product_image} style={{backgroundImage: `url(${BASE_URL + product.image})`}}></div>
      </div>

      <div className={s.product_info}>
        <p className={s.product_title}>{product.title}</p>

        <div className={s.price_counter_area}>
          <div className={s.counter}>
            <div
              className={s.less_button}
              onClick={() => {
                dispatch(decrCartProductCounterAction(product.id))
                dispatch(addProductToCartAction({id: product.id, count: -1}))
              }}
            >
              <Minus/>
            </div>
            <div className={s.counter_value}>{product.count}</div>
            <div 
              className={s.more_button} 
              onClick={()=> {
                dispatch(incrCartProductCounterAction(product.id))
                dispatch(addProductToCartAction({id: product.id, count: 1}))
              }}
            >
              <Plus/>
            </div>
          </div>

          <div className={s.product_price_info}>
            <div className={s.product_price_section}>
              <p className={s.product_price}>${product.discont_price ? formatter.format(product.discont_price * product.count) : formatter.format(product.price * product.count)}</p>
                {product.discont_price &&
                <p className={s.initial_price}>${formatter.format(product.price * product.count)}</p>
              }
            </div>
          </div>
        </div>
      </div>
      <Close 
        className={s.close_button}
        onClick={() => {
          dispatch(delProductInCartAction(product.id))
          dispatch(removeCartItemAction(product.id))
        }}
      />
    </div>
  )
}

export default CartItem