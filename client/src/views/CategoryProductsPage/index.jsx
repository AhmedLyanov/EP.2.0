import { useNavigate, useParams } from "react-router-dom"
import { fetchProductsByCategory } from "../../utils/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductList from "../../components/ProductList";

function CategoryProductsPage() {

  const {id} = useParams()
  const category = useSelector(store => store.productList)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchProductsByCategory(id))
    document.body.scrollIntoView()
  }, [id])

  return (
    <div>
      {!category.title && navigate('/nofound')}
      <ProductList/>
    </div>
  )
}

export default CategoryProductsPage