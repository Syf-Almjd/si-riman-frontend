//Seo
import Heads from "Utilis/Heads";

// Sections
import Header from "Section/Header";
import Hero from "Section/Hero";
import About from "Section/About";
import Portfolio from "Section/Portfolio";
import Skill from "Section/Skill";
import Client from "Section/Client";
import Product from "Section/Product";
import Contact from "Section/Contact";
import Footer from "Section/Footer";

const index = () => {
  return (
    <>
      <Heads />
      <Header />
      <Hero />
      <Product />
      <About />
      <Portfolio />
      <Skill />
      <Client />
      <Contact />
      <Footer />
    </>
  );
};
export default index;