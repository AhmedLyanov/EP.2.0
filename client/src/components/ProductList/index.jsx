import { forwardRef, useEffect } from 'react'
import s from './ProductList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../ProductItem'
import { Link } from 'react-router-dom'
import Filter from '../Filter'

const ProductList = forwardRef((props, ref) => {
  const {withNav} = props
  const products = useSelector(store => store.productList)

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        {products.title === 'Sale' ? 
          <h2 ref={ref} className={s.header_text}>{products.title}</h2> :
          <h1 ref={ref} className={s.header_text}>{products.title}</h1>}
        {(withNav) ? 
          <div className={s.header_navigation}>
            <div className={s.decoration_line}></div>
            <Link to={'/products/sales'}>
            <div className={s.navigation_button}>All Sales</div>
            </Link>
          </div>
        : ''}
      </div>
      {products.title !== 'Sale' && <Filter withCheckbox={products.title !== 'Discounted items'}/>}
      
      <div className={s.product_cards_list}>
      {products.data?.filter(elem => elem.displayed).map(elem => 
        <ProductItem key={elem.id} product={elem}/>)}
      </div>
    </div>
  )

})

export default ProductList