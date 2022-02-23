import MainLight from '../components/MainLight';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pack from '../components/Pack';
import Roadmap from '../components/Roadmap';
import YellowTape from '../components/YellowTape';
import Gallery from '../components/Gallery';
import Rarity from '../components/Rarity';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const Home = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <div>
      <MainLight />
      <Header mT="mt-[-4375px] md:mt-[-6605px] lg:mt-[-6605px]"/>
      <Hero />
      <Pack />
      <YellowTape />
      <Roadmap />
      <Gallery />
      <Rarity />
      <FAQ />
      <Team />
      <Footer />
      <button onClick={scrollToTop} className={(showButton ? "opacity-100 p-4 bottom-16 right-16" : "opacity-0 p-0 bottom-20 right-20") + " fixed border-[3px] border-[#0094FF]/60 hover:border-[#0094FF] color-[#FAFAFA] hover:bg-[#022457]/60 active:bg-[#003F9A]/60 bg-[#0B0B0B]/30 transition-all duration-300 backdrop-blur-[2px] cursor-pointer rounded-full shadow-2xl"}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style={{ fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#fafafa"><path d="M85.98925,83.05987l72.5625,42.2475v-26.875l-72.55175,-58.11987l-72.57325,58.11987v26.875z"></path></g></g></svg>
      </button>
    </div>
  );
}

export default Home;
