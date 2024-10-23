import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Nav";
import Hero from "./Hero";
import Footer from "./Footer";
import MainSection from "./MainSection";
import Newsletter from "./NewsLetterPage";
import NewsletterSubscription from "./NewsLetterSub";
import ContactForm from "./Contact";
import ScrollToTop from "./scrollToTop";

const App = () => {
 
  return (
    <Router>
      <div className="bg-black">
        <ScrollToTop />
        <Navbar />
    
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <MainSection />
                  <NewsletterSubscription />
                </>
              }
            />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
    
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
