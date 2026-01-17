import React from "react";
// import Navbar from "./components/Navbar-old";
import Hero from "./components/Hero";
// import Partners from "./components/Partners";
// import Solutions from "./components/Solutions";
// import Features from "./components/Features";
// import WhiteLabel from "./components/WhiteLabel";
// import Operators from "./components/Operators";
// import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow mt-20">
        <Hero />
        {/* <Partners />
        <Solutions />
        <Features />
        <WhiteLabel />
        <Operators />
        <CTA /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
