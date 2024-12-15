import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // Correct import
import rootReducer from './reducer'; // Import your root reducer

// Create the Redux store with thunk middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
