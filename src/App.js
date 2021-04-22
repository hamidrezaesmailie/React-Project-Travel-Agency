import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pagess/Home";
import Tourism from "./Components/Pagess/Tourism";
import Tour from "./Components/Pagess/Tour";
import SignUp from "./Components/Pagess/SignUp";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tourism" exact component={Tourism} />
          <Route path="/tour" exact component={Tour} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
