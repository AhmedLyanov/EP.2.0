const defaultState = 1

const DECR_COUNTER = 'DECR_COUNTER'
const INCR_COUNTER = 'INCR_COUNTER'
const RESET_COUNTER = 'RESET_COUNTER'

export const counterReducer = (state = defaultState, action) => {
  switch(action.type) {
    case DECR_COUNTER:
      if (state > 1) {
        return state - 1
      }
      return state
    case INCR_COUNTER:
      return state + 1
    case RESET_COUNTER:
      return defaultState
    default:
      return state;
  }
}

export const decrCounterAction = () => ({type: DECR_COUNTER})
export const incrCounterAction = () => ({type: INCR_COUNTER})
export const resetCounterAction = () => ({type: RESET_COUNTER})