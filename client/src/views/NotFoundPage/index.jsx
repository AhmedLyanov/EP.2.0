import Button from '../../components/Button/Button'
import zero from '../../assets/media/cactus.png'
import { ReactComponent as Four } from '../../assets/media/four.svg'
import { Link } from 'react-router-dom'
import css from './NotFoundPage.module.css'
import { NOT_FOUND_TEXTS } from '../../constants/NotFountPage'


function NotFoundPage() {
  return(
    <main className={css.wrapper}>
      <div className={css.picture}>
        <Four className={css.four}/>
        <img src={zero} alt={NOT_FOUND_TEXTS.IMAGE_ALT}/>
        <Four className={css.four}/>
      </div>
      <div className={css.info}>
        <h1 className={css.header_text}>{NOT_FOUND_TEXTS.HEADER}</h1>
        <p>{NOT_FOUND_TEXTS.MESSAGE}</p>
      </div>
      <Link to={'/'} className={css.button}>
        <Button title={NOT_FOUND_TEXTS.BUTTON}/>
      </Link>
    </main>
  )
}

export default NotFoundPage