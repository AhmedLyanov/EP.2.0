const defaultState ='off'


const HIDE_MODAL = 'HIDE_MODAL'
const DISPLAY_DISCOUNT_MODAL = 'DISPLAY_DISCOUNT_MODAL'
const DISPLAY_ORDER_MODAL = 'DISPLAY_ORDER_MODAL'
const DISPLAY_ERROR_MODAL = 'DISPLAY_ERROR_MODAL'

export const modalReducer = (state = defaultState, action) => {
  switch(action.type) {
    case DISPLAY_DISCOUNT_MODAL:
      return 'discount'
    case DISPLAY_ORDER_MODAL:
      return 'order'
    case DISPLAY_ERROR_MODAL:
      return 'error'
    case HIDE_MODAL:
      return defaultState
    default:
      return state
  }
}


export const hideModalAction = () => ({type: HIDE_MODAL})
export const displayDiscountModalAction = () => ({type: DISPLAY_DISCOUNT_MODAL})
export const displayOrderModalAction = () => ({type: DISPLAY_ORDER_MODAL})
export const dislpayErrorModalAction = () => ({type: DISPLAY_ERROR_MODAL})