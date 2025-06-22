const defaultState = Object.keys(localStorage)

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const GET_IDS_IN_CART = 'GET_IDS_IN_CART'
const DEL_PRODUCT_IN_CART = 'DEL_PRODUCT_IN_CART'
const CLEAR_STORED_PRODUCTS = 'CLEAR_STORED_PRODUCTS'

export const cartProductIdsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      let currentCount = +localStorage.getItem(action.payload.id) || 0
      if (currentCount + action.payload.count === 0) {
        localStorage.removeItem(action.payload.id)
      } else {
        localStorage.setItem(action.payload.id, currentCount + action.payload.count)
      }
      return Object.keys(localStorage)
    case GET_IDS_IN_CART:
      return Object.keys(localStorage)
    case DEL_PRODUCT_IN_CART:
      localStorage.removeItem(action.payload)
      return Object.keys(localStorage)
    case CLEAR_STORED_PRODUCTS:
      localStorage.clear()
      return defaultState
    default:
      return state
  }
}

export const addProductToCartAction = (payload) => ({type: ADD_PRODUCT_TO_CART, payload})
export const getIdsInCartAction = () => ({type: GET_IDS_IN_CART})
export const delProductInCartAction = (payload) => ({type: DEL_PRODUCT_IN_CART, payload})
export const clearStoredProductsAction = () => ({type: CLEAR_STORED_PRODUCTS})
