import { Link } from "react-router-dom"
import { formatter } from "../.."
import { BASE_URL } from "../../utils/backendconfig"
import s from './ProductItem.module.css'  
import PopUpButton from "../PopUpButton"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getIdsInCartAction } from "../../store/cartProductIdsReducer"

function ProductItem({product}) {

  const [active, setActive] = useState(false)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getIdsInCartAction())
  }, [])

  return(
    <Link to={'/products/' + product.id}>
    <div 
      className={s.product_card}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={()=> setActive(false)}
    >
      <div style={{backgroundImage: `url(${BASE_URL + product.image})`}} className={s.product_card_image}>
        {product.discont_price !== null && <div className={s.discount_tag}>{Math.round((1 - product.discont_price / product.price) * 100)}%</div>}


        <PopUpButton active={active} id={product.id}/>
      </div>
      <div className={s.product_card_description}>
        <div className={s.product_card_title}>{product.title}</div>
        <div className={s.product_card_price_field}>

          <p className={s.product_card_price_field_price}>${product.discont_price ? formatter.format(product.discont_price) : formatter.format(product.price)}</p>

          {product.discont_price !== null && <p className={s.product_card_price_field_initial_price}>${formatter.format(product.price)}</p>}  
        
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ProductItem