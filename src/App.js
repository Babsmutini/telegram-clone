import React, { useEffect } from 'react';
import './App.css';
import Telegram from './components/Telegram'
import { auth } from './firebase';
import {useSelector, useDispatch} from 'react-redux'
import { selectUser, login, logout } from './features/userSlice'
import Login from './components/Login'
function App() {
//  Getting whatever user is set as the value, the user is gotten from redux 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
//whenever the component loads, it loads once and when the dependency changes, it changes and its done through dispatch
  useEffect(() => {
    //checks if you are logged in through google and passes your data
    auth.onAuthStateChanged((authUser) => {
      // if they exist?
      if(authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        )
      } else {
        dispatch(logout())
      }
    });
  }, [dispatch])

  return (
    <div className="app">
    {/* if we are logged in, we should see telegram, if not we see the user login page */}
      { user ? <Telegram /> : <Login/>}
    </div>
  );
}

export default App;
