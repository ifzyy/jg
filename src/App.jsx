import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Nav";
import Hero from "./Hero";
import Footer from "./Footer";
import MainSection from "./MainSection";
import Newsletter from "./NewsLetterPage"; // Import the Newsletter component
import NewsletterSubscription from "./NewsLetterSub";
import ContactForm from "./Contact";
import ScrollToTop from "./scrollToTop"; // Import ScrollToTop

const App = () => {
  return (
    <Router>
      <div className="bg-black">
        {/* ScrollToTop component to handle scrolling */}
        <ScrollToTop />

        {/* Navbar is shared across all pages */}
        <Navbar />
        
        {/* Route-specific rendering */}
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MainSection />
              </>
            }
          />
          
          {/* Newsletter page */}
          <Route path="/newsletter" element={<Newsletter />} />
          
          {/* You can add more routes as needed */}
        </Routes>

        {/* Footer is shared across all pages */}
        <NewsletterSubscription />
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
