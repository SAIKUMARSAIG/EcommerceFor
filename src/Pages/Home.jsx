import React from "react";
import Hero from '../Components/Home components/HeroC.jsx';
import LatestC from "../Components/Home components/LatestC.jsx";
import BestSeller from "../Components/Home components/BestSeller.jsx";
import Policy from "../Components/Home components/Policy.jsx";
import Footer from "../Components/Footer.jsx";


const Home = () => {
  return (
    <div className="space-y-16"> {/* Add spacing between sections */}
      <Hero />
      <LatestC />
      <BestSeller />
      <Policy />
      <Footer pro={true} />
    </div>
  );
};

export default Home;
