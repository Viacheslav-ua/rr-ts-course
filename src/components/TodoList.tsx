import { FC, useEffect } from "react";
import { useActions, useTypedSelector } from "../hooks/redux";

 
const TodoList: FC = () => {

const { todos, loading, error, limit, page } = useTypedSelector(state => state.todo)
const { fetchTodos, setTodoPage } = useActions()
const pages = [1, 2, 3, 4, 5]

useEffect(() => {
  fetchTodos(page, limit)
}, [page])

if(loading) {
  return <h1>LOADING...</h1>
}

if(error) {
  return <h1>{error}</h1>
}  

return (
    <div>
      {todos.map( todo => 
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      )}
      {pages.map(p => 
        <div 
          key={p} 
          onClick={() => setTodoPage(p)} 
          style={{
            border: p === page ? 'solid 2px red' : 'solid 1px grey', 
            padding: 10,
            margin: 5, 
            display: 'inline-block'}}>
            {p}
        </div>
      )}
    </div>
  );
}
 
export default TodoList;