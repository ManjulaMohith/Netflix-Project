import React from "react";
import Netflix from "./Netflix";
import { Provider } from "react-redux";
import store from "./store";
import Wishlist from "./Wishlist";
import Home from "./Home";
import Signin from "./Signin"
import Getstarted from "./Getstarted";
import TvShows from "./TvShows"; 
import Overview from "./Overview";
import Movies from "./Movies";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Signin" element={<Signin/>} />
    <Route path="/Getstarted" element={<Getstarted/>} />
    <Route path="/Netflix" element={<Netflix/>} />
    <Route path="/Netflix/:id" element={<Overview/>} />
    <Route path="/TvShows" element={<TvShows/>} />
    <Route path="/TvShows/:id" element={<Overview/>} />
    <Route path="/Wishlist" element={<Wishlist/>} />
    <Route path="/Movies" element={<Movies/>} />
    <Route path="/Movies/:id" element={<Overview/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
