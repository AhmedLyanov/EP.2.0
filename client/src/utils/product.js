import { getProductByIdAction } from "../store/productReducer"
import { BASE_URL } from "./backendconfig"


export function fetchProductByID(id) {
  return function(dispatch) {
    fetch(BASE_URL + '/products/' + id)
      .then(res => res.json())
        .then(data => dispatch(getProductByIdAction(data)))
  }
}