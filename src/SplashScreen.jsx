import React from "react";
import logo from "./assets/logo.png";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <img src={logo} className="h-8 mb-4" alt="Logo" />
      
 
      
      <div className="w-full max-w-xs">
        <div className="h-1 bg-gray-200 rounded-full">
          <div className="h-1 bg-gold rounded-full animate-loadingBar" style={{ width: '70%' }}></div>
        </div>
      </div>


    </div>
  );
};

export default SplashScreen;
