
import { SET_CURRENT_PAGE, SET_CURRENT_USER, SET_CURRENT_USER_REPO, SET_TOTAL_COUNT, SET_USERS } from "./types";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
})
export const setUsersAction = (users) => ({
  type: SET_USERS,
  payload: users
})
export const setTotalCount = (count) => ({
  type: SET_TOTAL_COUNT,
  payload: count
})
export const setCurrentPageAction = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page
})
export const setCurrentUserRepo = (repo) => ({
  type: SET_CURRENT_USER_REPO,
  payload: repo
})
