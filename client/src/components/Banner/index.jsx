import bannerPict from '../../assets/media/banner_image.jpg'
import s from './Banner.module.css'
import Button from '../Button/Button'



function Banner() {
  return(
    <div style={{backgroundImage: `url(${bannerPict})`}} className={s.banner}>
      <h1 className={s.header_text}>Amazing Discounts on Garden Products</h1>
      <Button title='Check out'/>
    </div>
    
  )
}

export default Banner