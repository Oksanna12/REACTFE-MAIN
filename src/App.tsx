import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, fetchData } from "../src/store/actions/dataActions";
import "./App.css";
import { RootState } from "./store/index";
import NewPage from "../src/pages/NewPage/NewPage";
import Header from "../src/pages/Header/Header";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/NewPage/Login";
import NavigationLink from "./components/HEADER/NavigationLink";
import Footer from "./components/FOOTER/Footer";
import Home from "./pages/NewPage/Home";
import Category from "./pages/NewPage/Category";
import About from "./pages/NewPage/About";
import Services from "./pages/NewPage/Services";
import Contacts from "./pages/NewPage/Contacts";
import Logo from "./components/LOGO/Logo";

function App() {
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
      {/* Define routes */}
      <main>
        <Routes>
          {/* <Route path="/new" element={<NewPage />} /> */}
          {/* <Route path="/" element={<Header />} />  */}
        
          {/* <Route path="/" element={<NavigationLink />} />        */}
          <Route path="/home" element={<Home />}/> 
          <Route path="/category" element={<Category />} />  
          <Route path="/about" element={<About />} />  
          <Route path="/services" element={<Services />} />  
          <Route path="/contacts" element={<Contacts />} /> 
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
