import s from './Footer.module.css'
import { ReactComponent as Telegram } from '../../assets/media/ic-tg.svg'
import { ReactComponent as Vk } from '../../assets/media/ic-vk.svg'
import { FOOTER_TEXTS } from '../../constants/Footer'

function Footer() {
  return(
    <footer>
      <h2 className={s.footer_header}>{FOOTER_TEXTS.HEADER}</h2>
      <div className={s.contacts_wrapper}>
        <div className={s.contact_item}>
          <p>{FOOTER_TEXTS.CONTACTS.PHONE.LABEL}</p>
          <h3>{FOOTER_TEXTS.CONTACTS.PHONE.VALUE}</h3>
        </div>
        <div className={s.contact_item}>
          <p>{FOOTER_TEXTS.CONTACTS.SOCIALS.LABEL}</p>
          <div className={s.smm_icons}>
            <a href={FOOTER_TEXTS.CONTACTS.SOCIALS.LINKS.TELEGRAM} target='_blank' rel="noreferrer">
              <Telegram className={s.sm_icon}/>
            </a>
            <a href={FOOTER_TEXTS.CONTACTS.SOCIALS.LINKS.VK} target='_blank' rel="noreferrer">
              <Vk className={s.sm_icon}/>
            </a>
          </div>
        </div>
        <div className={s.contact_item}>
          <p>{FOOTER_TEXTS.CONTACTS.ADDRESS.LABEL}</p>
          <h3>{FOOTER_TEXTS.CONTACTS.ADDRESS.VALUE}</h3>
        </div>
        <div className={s.contact_item}>
          <p>{FOOTER_TEXTS.CONTACTS.HOURS.LABEL}</p>
          <h3>{FOOTER_TEXTS.CONTACTS.HOURS.VALUE}</h3>
        </div>
        <div className={s.contact_item}>
          <iframe 
            src={FOOTER_TEXTS.MAP.SRC} 
            style={{width: '100%', height: '350px', border: 'none', borderRadius: '12px'}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title={FOOTER_TEXTS.MAP.TITLE}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer