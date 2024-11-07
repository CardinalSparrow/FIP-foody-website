import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import PopularDishes from "./Components/PopularDishes/PopularDishes";
import BestFood from "./Components/BestFood/BestFood";
import FoodDelivery from "./Components/FoodDelivery/FoodDelivery";
import DoYouPrefer from "./Components/DoYouPrefer/DoYouPrefer";
import TopDishes from "./Components/TopDishes/TopDishes";
import FAQ from "./Components/FAQ/FAQ";
import Feedback from "./Components/Feedback/Feedback";
import AskQuestion from "./Components/AskAQuestion/AskQuestion";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <PopularDishes />
      <BestFood />
      <FoodDelivery />
      <DoYouPrefer />
      <TopDishes />
      <FAQ />
      <Feedback />
      <AskQuestion />
      <Footer />
    </div>
  );
};

export default App;
