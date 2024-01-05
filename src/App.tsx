import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, fetchData } from "../src/store/actions/dataActions";
import "./App.css";
import { RootState } from "../src/store/index";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts";
import SignUp from "./pages/SignUp/SignUp";
import AuthDetails from "./components/Auth/AuthDetails";
import FullInfo from "./components/Cards/FullInfo";
import AppContext from "./context";
// import { auth } from "./firebase";
import DataProfile from '../src/store/data/DataProfile.json'

function App() {
  const users = DataProfile;
  const appState = {
    users
  }

  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector((state: RootState) => state.yourStateSlice.data);
  const loading = useSelector(
    (state: RootState) => state.yourStateSlice.loading
  );
  const error = useSelector((state: RootState) => state.yourStateSlice.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(data, "data");


  return (
    <div className="App">
      <main>
        <AppContext.Provider value={appState}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:name" element={<AuthDetails />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/info/:name" element={<FullInfo />} />
          </Routes>
        </AppContext.Provider>
        <Footer />
      </main>
    </div>
  );
}

export default App;
