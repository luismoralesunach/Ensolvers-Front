import axios from 'axios';

// Action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action creators
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (userData: any) => ({ type: LOGIN_SUCCESS, payload: userData });
export const loginFailure = (error: string) => ({ type: LOGIN_FAILURE, payload: error });

// Async action using Redux Thunk for user login
export const login = (email: string, password: string) => async (dispatch: any) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('http://localhost:5000/api/login', { email, password });
    dispatch(loginSuccess(response.data));
  } catch (error:any) {
    dispatch(loginFailure(error.message || 'Login failed'));
  }
};
