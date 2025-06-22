import s from './CategoryItem.module.css'

function CategoryItem({id, title, image}) {
  return (
    <div className={s.category_card}>
      <img src={image} alt={`${title} image`} className={s.category_image}/>
      <p className={s.category_text}>{title}</p>
    </div>
  )
}

export default CategoryItem