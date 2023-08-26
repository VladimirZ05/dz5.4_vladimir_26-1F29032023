import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import './App.css';
import userReducer from './reducers/userReducer';
import orderReducer from './reducers/orderReducer';
import UserForm from './components/UserForm';
import OrderDisplay from './components/OrderDisplay';

const rootReducer = combineReducers({
  user: userReducer,
  order: orderReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserForm />
        <OrderDisplay />
      </div>
    </Provider>
  );
}

export default App;
