import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreators from "../store/action-creators/user"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(UserActionCreators, dispatch)
}