import Button from '../../components/Button/Button'
import zero from '../../assets/media/cactus.png'
import { ReactComponent as Four } from '../../assets/media/four.svg'
import { Link } from 'react-router-dom'
import css from './NotFoundPage.module.css'


function NotFoundPage() {
  return(
    <main className={css.wrapper}>
      <div className={css.picture}>
        <Four className={css.four}/>
        <img src={zero} alt='zero'/>
        <Four className={css.four}/>
      </div>
      <div className={css.info}>
      <h1 className={css.header_text}>Page Not Found</h1>
      <p>We’re sorry, the page you requested could not be found. Please go back to the homepage.</p>
      
      </div>
      <Link to={'/'} className={css.button}>
        <Button title={'Go Home'}/>
      </Link>
    </main>
  )
}

export default NotFoundPage