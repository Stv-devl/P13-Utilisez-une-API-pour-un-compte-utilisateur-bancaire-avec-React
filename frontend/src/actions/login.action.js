import axios from "axios";

export const POST_LOGIN_REQUEST = "POST_LOGIN_REQUEST";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_FAILURE = "POST_LOGIN_FAILURE";

export const postLogin = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: POST_LOGIN_REQUEST });
    try {
      const res = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: POST_LOGIN_FAILURE,
        payload: error.response ? error.response.data : error.message,
      });
    }
  };
};
