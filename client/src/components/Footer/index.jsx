import s from './Footer.module.css'
import { ReactComponent as Telegram } from '../../assets/media/ic-tg.svg'
import { ReactComponent as Vk } from '../../assets/media/ic-vk.svg'

function Footer() {
  return(
    <footer>
      <h2 className={s.footer_header}>Contacts</h2>
      <div className={s.contacts_wrapper}>
        <div className={s.contact_item}>
          <p>Phone</p>
          <h3>+7 (499) 350-66-04</h3>
        </div>
        <div className={s.contact_item}>
          <p>Socials</p>
          <div className={s.smm_icons}>
            <a href='https://t.me/ithubnews' target='_blank'><Telegram className={s.sm_icon}/></a>
            <a href='https://vk.com/ithubcollege' target='_blank'><Vk className={s.sm_icon}/></a>
            
          </div>
        </div>
        <div className={s.contact_item}>
          <p>Address</p>
          <h3>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h3>
        </div>
        <div className={s.contact_item}>
          <p>Working Hours</p>
          <h3>24 hours a day</h3>
        </div>
        <div className={s.contact_item}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.6016518007054!2d37.63041328711789!3d55.7132956431956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b22a91ac945%3A0xf19f72681321ff46!2sIThub%20college!5e0!3m2!1sru!2sru!4v1701871105845!5m2!1sru!2sru" style={{width: '100%', height: '350px', border: 'none', borderRadius: '12px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Map'></iframe>
        </div>
      </div>
    </footer>
  )
}

export default Footer