import './App.css';
import Header from './Header';
import Home from './Home';
import { Navigate , Route, BrowserRouter, Routes } from 'react-router-dom';  
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase";
import {useEffect} from "react";
import { useStateValue } from './StateProvider';
import Payment from "./Payment"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51KLZ5OSE3EfkuyefKeV1wXb5ofVdqmbHgkihoEkg6bsess7USr35L93XERmpVbRgEi9TcNqbXqvHFEoYv2bKW59W00Y0kncluX');

function App() {
  
  const [{},dispatch]=useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
    <Routes>
    
    <Route path="/" 
      element={
      <>  
      <Home/>
      </>}
    />
    <Route path="/checkout" element={
    <>
    <Checkout/>
    </>
    }/>
    
    <Route path="/login" element={
    <>
    <Login/>
    </>
    }/>

    <Route path="/payment" element={
    <>
    <Elements stripe={promise}>
          <Payment/>
    </Elements>
      
    </>
    }/>
    <Route path="*" element={<Home/>}/>
    </Routes>
    </BrowserRouter> 
    {/* <navigate to="/"/> */}
    </div>
  );
}

export default App;
