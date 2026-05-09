import { useState, useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Generator from "./components/Generator.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Templates from "./components/Templates.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [templateData, setTemplateData] = useState(null);
  const generatorRef = useRef(null);

  const handleUseTemplate = (data) => {
    setTemplateData(data);
    generatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen noise" style={{ background: "#09071a" }}>
      <Navbar />
      <Hero />
      <div ref={generatorRef}>
        <Generator key={JSON.stringify(templateData)} initialData={templateData} />
      </div>
      <Features />
      <HowItWorks />
      <Templates onUseTemplate={handleUseTemplate} />
      <Footer />
    </div>
  );
}
