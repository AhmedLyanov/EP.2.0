import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryList } from '../../utils/categories'
import { BASE_URL } from '../../utils/backendconfig'
import CategoryItem from '../CategoryItem'
import { Link } from 'react-router-dom'
import s from './CategoryList.module.css'

function CategoryList({itemNumber, withNav, type}) {

const categoryList = useSelector(store => store.categoryList)
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchCategoryList())
}, [])

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
      {(withNav) ? <h2 className={s.header_text}>Categories</h2> 
        : <h1 className={s.header_text}>Categories</h1>}
      
      {(withNav) ? 
        <div className={s.header_navigation}>
          <div className={s.decoration_line}></div>
          <Link to={'/categories'}>
            <div className={s.navigation_button}>All Categories</div>
          </Link>
        </div> 
        : '' }
      </div>
      <div className={type}>
      {categoryList.slice(0, itemNumber ?? categoryList.length).map(elem =>
        <Link key={elem.id} to={`/category/${elem.id}`}>
          <CategoryItem id={elem.id} title={elem.title} image={BASE_URL + elem.image}/>
        </Link>
      )}
      </div>
    </div>
  )
}

export default CategoryList