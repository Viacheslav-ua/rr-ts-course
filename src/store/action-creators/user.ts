import { Dispatch } from "react"
import { UserAction, UserActionType } from "../../types/user"
import axios from "axios"


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionType.FETCH_USERS})
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch({
        type: UserActionType.FETCH_USERS_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: UserActionType.FETCH_USERS_ERROR, 
        payload: `Error ${error}`,
      })
    }
  }
}