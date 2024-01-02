import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, fetchData } from "../src/store/actions/dataActions";
import "./App.css";
import { RootState } from "../src/store/index";
import NewPage from "../src/pages/NewPage/NewPage";
import Header from "../src/pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "../src/pages/NewPage/Login";
import Footer from "../src/components/Footer/Footer";
import Home from "../src/pages/NewPage/Home";
import Category from "../src/pages/NewPage/Category";
import About from "../src/pages/NewPage/About";
import Services from "../src/pages/NewPage/Services";
import Contacts from "../src/pages/NewPage/Contacts";
import SignUp from "../src/pages/NewPage/SignUp/SignUp";
import AuthDetails from "./components/Auth/AuthDetails";
import FullInfo from "./components/Card/FullInfo";
import AppContext from "./context";
// import { auth } from "./firebase";
import DataProfile from '../src/store/data/DataProfile.json'

function App() {
  const users = DataProfile;

  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] =useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch('https://dummyjson.com/users?&limit=9')
  //   .then((res) => res.json())
  //   .then(({users}) =>{
  //     setUsers(users);
  //     setIsLoading(false);
  //   });
  // }, []);

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
            <Route path="/new" element={<NewPage />} />
            <Route path="/" element={<Header />} />
            <Route path="/home" element={<Home />} />
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
