import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import s from './PopUpButton.module.css'
import { addProductToCartAction } from '../../store/cartProductIdsReducer'

function PopUpButton({id, active}) {
  const dispatch = useDispatch()
  return (
    <div className={`${s.popup_wrapper} ${active && s.active}`}>
      <Button 
        title={'Add to cart'}
        onClick={(e)=> {
        e.preventDefault()
        dispatch(addProductToCartAction({id, count: 1}))
        }}
        switchBackground={true}
      />
    </div>
  )
}

export default PopUpButton