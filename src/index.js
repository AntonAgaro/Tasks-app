import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {rrfProps} from './config/firebaseConfig';
import {useSelector} from 'react-redux';
import {isLoaded} from 'react-redux-firebase';
import Spinner from './components/ui/Spinner';

const AuthIsLoaded = ({children}) => {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) {
    return (
      <Spinner/>
    )
  }
  return children;
}

ReactDOM.render(
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
      </Provider>,
  document.getElementById('root')
);


