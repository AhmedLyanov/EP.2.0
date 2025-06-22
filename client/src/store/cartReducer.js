const defaultState = []


const GET_CART_PRODUCTS = 'GET_CART_PRODUCTS'
const INCR_CART_PRODUCT_COUNTER = 'INCR_CART_PRODUCT_COUNTER'
const DECR_CART_PRODUCT_COUNTER = 'DECR_CART_PRODUCT_COUNTER'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
const CLEAR_CART = 'CLEAR_CART'

export const cartReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_CART_PRODUCTS:
      let productsInCart = action.payload.filter(elem => Object.keys(localStorage).includes(`${elem.id}`))
      return productsInCart.map(elem => { return {...elem, count: +localStorage.getItem(elem.id)}})
    case INCR_CART_PRODUCT_COUNTER:
      return state.map(elem => {
        if (elem.id !== action.payload) {
          return elem
        } else {
          elem.count = elem.count += 1
          return elem
        }
      })
    case DECR_CART_PRODUCT_COUNTER:
      if (state.find(elem => elem.id === action.payload).count === 1) {
        return state.filter(elem => elem.id !== action.payload)
      } else {
        return state.map(elem => {
          if (elem.id !== action.payload) {
            return elem
          } else {
            elem.count -= 1
            return elem
          }
        })
      }
    case REMOVE_CART_ITEM:
      return state.filter(elem => elem.id !== action.payload)
    case CLEAR_CART:
      return []
    default:
      return state
  }
}

export const getCartProductsAction = (payload) => ({type: GET_CART_PRODUCTS, payload})
export const incrCartProductCounterAction = (payload) => ({type: INCR_CART_PRODUCT_COUNTER, payload})
export const decrCartProductCounterAction = (payload) => ({type: DECR_CART_PRODUCT_COUNTER, payload})
export const removeCartItemAction = (payload) => ({type: REMOVE_CART_ITEM, payload})
export const clearCartAction = () => ({type: CLEAR_CART})