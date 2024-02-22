import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
} from "../actions/login.action";
import updateState from "./updateState";

const initialState = {
  login: null,
  loading: false,
  error: null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return updateState(state, { loading: true, error: null });
    case POST_LOGIN_SUCCESS:
      return updateState(state, {
        loading: false,
        login: action.payload,
        error: null,
      });
    case POST_LOGIN_FAILURE:
      return updateState(state, {
        loading: false,
        login: null,
        error: action.payload,
      });
    default:
      return state;
  }
}
