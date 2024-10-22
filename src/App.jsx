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
import SplashScreen from "./SplashScreen"; // Import the SplashScreen component

const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map((url) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve; // Resolve when the image is loaded
        img.onerror = resolve; // Resolve on error to prevent hanging
      })
    )
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const imageUrls = [
        './assets/4.png',
        './assets/5.png',
        './assets/about.png',
        './assets/alphaking.png',
        './assets/branding.png',
        './assets/consulting.png',
        './assets/contact-us.png',
        './assets/copywriting.png',
        './assets/courtroom.webp',
        './assets/cybersecurity.png',
        './assets/dol.png',
        './assets/dolapo-hamzat.png',
        './assets/email.png',
        './assets/gift.png',
        './assets/hero-arrow.png',
        './assets/hero-bg.png',
        './assets/instagram.png',
        './assets/jg-hero.png',
        './assets/jg-vica.png',
        './assets/linkedin.png',
        './assets/logo.png',
        './assets/marketing.png',
        './assets/mastermind.png',
        './assets/milky-way.png',
        './assets/news-name.png',
        './assets/onitade.png',
        './assets/people.png',
        './assets/progital.png',
        './assets/pw.png',
        './assets/remoting-work.png',
        './assets/right-arrow.png',
        './assets/source-gadget.png',
        './assets/talent-hackers.png',
        './assets/test-one.png',
        './assets/test-three.png',
        './assets/test-two.png',
        './assets/watch.png',
        './assets/x.png',
        // Add more images you want to preload
      ];

      await preloadImages(imageUrls); // Wait until images are preloaded
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading time
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <Router>
      <div className="bg-black">
        <ScrollToTop />
        <Navbar />
        {loading ? (
          <SplashScreen /> // Display splash screen while loading
        ) : (
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
        )}
    
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
