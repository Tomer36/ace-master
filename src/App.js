import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

// Home Pages Import
import DigitalAgency from "./pages/DigitalAgency";

// Service

// Css Import
import "./assets/scss/app.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            element={<DigitalAgency />}
          />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
