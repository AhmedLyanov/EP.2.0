import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchProductList } from "../../utils/products"
import ProductList from "../../components/ProductList"

function ProductsListPage() {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchProductList())
    document.body.scrollIntoView()
  })
  return(
    <main>
      <ProductList/>
    </main>
  )
}

export default ProductsListPage