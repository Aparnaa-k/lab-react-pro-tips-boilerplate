import React from "react";
import Navbar from "./components/navbar/navbar";
import Contacts from "./components/pages/contacts/contacts";
import Form from "./components/pages/Form/form";
import Home from "./components/pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </Router>
  );
}

export default App;
