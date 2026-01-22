import React from "react";
import Hero from "./components/Hero";
// import Partners from "./components/Partners";
import Solutions from "./components/Solutions";
// import Features from "./components/Features";
import WhiteLabel from "./components/WhiteLabel";
import Operators from "./components/Operators";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Testimonials from "./components/testimonials";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow mt-20">
        <Hero />
        {/* <Partners /> */}
        <Solutions />
        {/* <Features /> */}

        <WhiteLabel />
        <Operators />
        <CTA />
        <Testimonials />
      </main>
      <Footer />

      <FloatingWhatsApp
        phoneNumber="+2349059296155"
        accountName="Delyn"
        avatar="/logo.png"
        statusMessage="online"
        chatMessage="Hello! 👋 Would you like to request a demo?"
        allowClickAway={true}
        allowEsc={true}
        notification={true}
        notificationSound={true}
      />
    </div>
  );
};

export default App;
