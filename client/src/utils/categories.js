import {  getCategoryListAction } from "../store/categoryReducer";
import { BASE_URL } from "./backendconfig";

export function fetchCategoryList() {
  return function(dispatch) {
    fetch(BASE_URL + '/categories/all')
      .then(res => res.json())
        .then(data => dispatch(getCategoryListAction(data)))
  }
}
