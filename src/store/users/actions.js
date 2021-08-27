
import { SET_CURRENT_PAGE, SET_CURRENT_USER } from "./types";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
})
export const setCurrentPageAction = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page
})
