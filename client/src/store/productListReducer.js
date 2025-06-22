const defaultState = {}

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
const GET_ALL_PRODUCTS_ON_SALE = 'GET_ALL_PRODUCTS_ON_SALE';
const GET_TOP_PRODUCTS_ON_SALE = 'GET_TOP_PRODUCTS_ON_SALE';
const APPLY_PRODUCTS_FILTER = 'APPLY_PRODUCTS_FILTER'

export const productListReducer = (state = defaultState, action) => {
  switch(action.type) {

    case GET_ALL_PRODUCTS:
      return {title: 'All products', data: action.payload.map(elem => {
        elem.displayed = true;
        return elem
      })};

    case GET_PRODUCTS_BY_CATEGORY:
      return {title: action.payload.category.title, data: action.payload.data.map(elem => {
        elem.displayed = true;
        return elem
      })};

    case GET_ALL_PRODUCTS_ON_SALE:
      return {title: 'Discounted items', data: action.payload.map(elem => {
        elem.displayed = true;
        return elem
      })}

    case GET_TOP_PRODUCTS_ON_SALE:
      return {title: 'Sale', data: action.payload.map(elem => {
        elem.displayed = true;
        return elem
      }).sort((a,b) => a.discont_price / a.price - b.discont_price / b.price).slice(0,4)}

    case APPLY_PRODUCTS_FILTER:
      let updatedProducts = state.data.map(elem => {

        let currentPrice = elem.discont_price || elem.price;
        elem.displayed = (!action.payload.discount_only || elem.discont_price) && (currentPrice >= action.payload.min && currentPrice <= action.payload.max)
        return elem;

      })
      switch(action.payload.sort_type) {

        case 'price_desc':
          updatedProducts.sort((a, b) => (a.discont_price || a.price) - (b.discont_price || b.price));
          break;

        case 'price_asc':
          updatedProducts.sort((a, b) => (b.discont_price || b.price) - (a.discont_price || a.price));
          break;

        case 'name_asc':
          updatedProducts.sort((a, b) => a.title > b.title ? 1 : -1);
          break;

        case 'name_desc':
          updatedProducts.sort((a, b) => b.title > a.title ? 1 : -1);
          break;

        case 'update_date':
          updatedProducts.sort((a, b) => Date.parse(a.updatedAt) - Date.parse(b.updatedAt));
          break;

        default:
          updatedProducts.sort((a, b) => a.id - b.id);
      }

      return {title: state.title, data: updatedProducts};

    default:
      return state;
  }
}

export const getAllProductsAction = (payload) => ({type: GET_ALL_PRODUCTS, payload})
export const getProductsByCategoryAction = (payload) => ({type: GET_PRODUCTS_BY_CATEGORY, payload})
export const getAllProductsOnSaleAction = (payload) => ({type: GET_ALL_PRODUCTS_ON_SALE, payload})
export const getTopProductsOnSaleAction = (payload) => ({type: GET_TOP_PRODUCTS_ON_SALE, payload})
export const applyProductsFilterAction = (payload) => ({type: APPLY_PRODUCTS_FILTER, payload})