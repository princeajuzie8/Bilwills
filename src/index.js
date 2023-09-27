import React from 'react';
import ReactDOM from 'react-dom/client';
import { Discardcontextprovider } from "./Context/discardcontext";
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import store from './Redux/store/configureStore';
import { Provider } from 'react-redux';
import { storageSession } from './Redux/store/StorageSession';
import UserSlice from './Redux/slice/UserSlice';

import { UserAuthContextProvider } from './Context/Auth';
const root = ReactDOM.createRoot(document.getElementById('root'));
// Load user data from session storage on app initialization



root.render(
  
  <React.StrictMode>


    <Router>

      <Provider store={store}>


    <UserAuthContextProvider>

      <Discardcontextprovider>

      <App />
      </Discardcontextprovider>
    </UserAuthContextProvider>
     
      </Provider>
 
   
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

