import { useEffect } from "react"
import CategoryList from "../../components/CategoryList"



function CategoryPage() {

  useEffect(() => {
    document.body.scrollIntoView()
  },[])
  
  return (
    <main>
      <CategoryList type='categories_list_categories'/>
    </main>
  )
}

export default CategoryPage