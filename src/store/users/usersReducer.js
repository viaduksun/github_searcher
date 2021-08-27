import { SET_CURRENT_USER } from "./types"

const initialState = {
  pages: null,
  currentPage: 1,
  currentUser: {},
}

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    default:
      return state;
  }
}

export default charactersReducer
