import { SET_CURRENT_USER, SET_CURRENT_USER_REPO, SET_TOTAL_COUNT, SET_USERS } from "./types"

const initialState = {
  pages: null,
  totalCount: null,
  currentPage: 1,
  currentUser: {},
  users: [],
  currentUserRepo: [],
}

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    case SET_USERS:
      return { ...state, users: action.payload }
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload }
    case SET_CURRENT_USER_REPO:
      return { ...state, currentUserRepo: action.payload }
    default:
      return state;
  }
}

export default charactersReducer
