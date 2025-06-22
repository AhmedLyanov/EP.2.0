import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchProductByID } from "../../utils/product"
import s from './ProductItemPage.module.css'
import { BASE_URL } from "../../utils/backendconfig"
import { formatter } from "../.."
import Button from "../../components/Button/Button"
import { decrCounterAction, incrCounterAction, resetCounterAction } from "../../store/counterReducer"
import { ReactComponent as Plus } from "../../assets/media/plusProd.svg"
import { ReactComponent as Minus } from "../../assets/media/minusProd.svg"
import { addProductToCartAction } from "../../store/cartProductIdsReducer"

function ProductItemPage() {
  const {id} = useParams()
  const product = useSelector(store => store.product)
  const dispatch = useDispatch()
  const count = useSelector(store => store.counter)
  const navigate = useNavigate()

  useEffect(()=> {
    dispatch(fetchProductByID(id))
    dispatch(resetCounterAction())
    document.body.scrollIntoView()
  }, [id])

  return(

    <main className={s.wrapper}>
      {!product.title && navigate('/nofound')}
      <div className={s.image_container} style={{backgroundImage: `url(${BASE_URL + product.image})`}}></div>
  
      <div className={s.product_info}>
        <h1 className={s.product_title}>{product?.title}</h1>
        <div className={s.product_price_info}>
          <div className={s.product_price_section}>
            <p className={s.product_price}>${product.discont_price ? formatter.format(product.discont_price * count) : formatter.format(product.price * count)}</p>
            {product.discont_price &&
              <p className={s.initial_price}>${formatter.format(product.price * count)}</p>
            }
          </div>
          {product.discont_price &&
              <div className={s.discount_tag}>{Math.round((1 - product.discont_price / product.price) * 100)}%</div>
            }
        </div>
        <div className={s.add_to_cart_area}>
          <div className={s.counter}>
            <div className={s.less_button} onClick={() => dispatch(decrCounterAction())}><Minus/></div>
            <div className={s.counter_value}>{count}</div>
            <div className={s.more_button} onClick={()=> dispatch(incrCounterAction())}><Plus/></div>
          </div>
          <Button 
            title={'Add to cart'}
            style={{width: '100%', backgroundColor: '#393', color: 'white'}}
            onClick={() => {
              dispatch(addProductToCartAction({id, count}))
              dispatch(resetCounterAction())
            }}/>
        </div>
        <h2 className={s.description_title}>Description</h2>
        <p className={s.product_description}>{product.description}</p>
      </div>
    </main>
  )
}

export default ProductItemPage