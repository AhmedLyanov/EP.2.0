import s from './Modal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Close} from '../../assets/media/closeModal.svg'
import { hideModalAction } from '../../store/modalReducer'

function Modal() {

  const modalContent = {
    'discount' : ['You successfully placed a request for 5% off on the first order!'],
    'order' : [`Your order has been successfully placed on the website.`, 
    `A manager will contact you shortly to confirm your order.`],
    'error' : [`Sorry, but we're unable to proceed your request at the moment, please try again later.`],
    'off' : []
  }  

  const modalMode = useSelector(store => store.modal)
  const dispatch = useDispatch()

  
  return(
    <div className={`${s.wrapper} ${modalMode !== 'off' ? s.active : ''}`}>
      <div className={`${s.modal_content} ${modalMode !== 'off' ? s.active : ''}`}>
        {modalMode === 'error' ? <h2> Oops...</h2> : <h2>Congratulations!</h2> }
        {modalContent[modalMode].map(elem => 
         <p key={Date.now()}>{elem}</p>)}
        <Close className={s.close_button} onClick={()=> dispatch(hideModalAction())}/>
      </div>
    </div>
  )
}

export default Modal