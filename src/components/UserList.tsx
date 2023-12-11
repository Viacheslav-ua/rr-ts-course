import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions, useTypedSelector } from "../hooks/redux";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/action-creators/user";
 
const UserList: FC = () => {

const {users, loading, error} = useTypedSelector(state => state.user)

  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if(loading) {
    return <h1>LOADING...</h1>
  }

  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user => 
        <div key={user.id}>
          {user.name}        
        </div>  
      )}
    </div>
  );
}
 
export default UserList;