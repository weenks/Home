import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice'

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user is', authUser);
      if (authUser) {
        // the user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
        }))
      } else {
        dispatch(logout());
        // the user is logged out
      }
    })
  }, [dispatch])

  return (
    <div className='app'>
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
          <Login />
        )}
        
    </div>
  );
}

export default App;