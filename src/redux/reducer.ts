import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

interface AuthState {
  isLoading: boolean;
  user: any;
  error: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
