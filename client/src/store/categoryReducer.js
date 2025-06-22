const defaultState = []

const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST'

export const categoryListReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_CATEGORY_LIST:
      return action.payload;
    default:
      return state; 
  }
}

export const getCategoryListAction = (payload) => ({type: GET_CATEGORY_LIST, payload})
