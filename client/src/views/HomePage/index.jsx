import { useRef, useEffect } from "react"
import Banner from "../../components/Banner"
import CategoryList from "../../components/CategoryList"
import DiscountForm from "../../components/DiscountForm"
import ProductList from "../../components/ProductList"
import { useDispatch } from "react-redux"
import { fetchTopProductsOnSale } from "../../utils/products"
import css from './HomePage.module.css'



function HomePage() {

  let saleRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTopProductsOnSale())
    document.body.scrollIntoView()
  }) 
  return (
    <main className={css.wrapper}>
      <Banner/>
      <CategoryList itemNumber={4} withNav={true} type='categories_list_main'/>
      <DiscountForm/>
      <ProductList ref={saleRef} withNav={true}/>
    </main>
  )
}

export default HomePage