import { getCartProductsAction } from "../store/cartReducer";
import { getAllProductsAction, getAllProductsOnSaleAction, getProductsByCategoryAction, getTopProductsOnSaleAction } from "../store/productListReducer";
import { BASE_URL } from "./backendconfig";

export function fetchProductList() {
  return function(dispatch) {
    fetch(BASE_URL + '/products/all')
      .then(res => res.json())
        .then(data => dispatch(getAllProductsAction(data)))
  }
}

export function fetchProductsByCategory(id) {
  return function(dispatch) {
    fetch(BASE_URL + '/categories/' + id)
      .then(res => res.json())
        .then(data => dispatch(getProductsByCategoryAction(data)))
          .catch(err => dispatch(getProductsByCategoryAction({category: '', data: []})))
  }
}

export function fetchAllProductsOnSale() {
  return function(dispatch) {
    fetch(BASE_URL + '/products/all')
      .then(res => res.json())
        .then(data => dispatch(getAllProductsOnSaleAction(data.filter(elem => elem.discont_price))))
  }
}

export function fetchTopProductsOnSale() {
  return function(dispatch) {
    fetch(BASE_URL + '/products/all')
      .then(res => res.json())
        .then(data => dispatch(getTopProductsOnSaleAction(data.filter(elem => elem.discont_price))))
  }
}

export function fetchCartProducts() {
  return function(dispatch) {
    fetch(BASE_URL + '/products/all')
      .then(res => res.json())
        .then(data => dispatch(getCartProductsAction(data)))
  }
}