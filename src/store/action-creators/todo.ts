import { Dispatch } from "redux"
import { TodoAction, TodoActionType } from "../../types/todo"
import axios from "axios"


export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({type: TodoActionType.FETCH_TODOS})
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: page, _limit: limit}
      })
      setTimeout(() => {
              
      }, 1000)
      dispatch({
        type: TodoActionType.FETCH_TODOS_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: TodoActionType.FETCH_TODOS_ERROR, 
        payload: `Error ${error}`,
      })
    }
  }
}

export const setTodoPage = (page: number): TodoAction => {
  return {
    type: TodoActionType.SET_TODO_PAGE,
    payload: page,
  }
}