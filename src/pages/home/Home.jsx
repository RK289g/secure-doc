import "./Home.css";
import Hero from "../../components/hero-section/Hero";
import YoutubeSection from "../../components/youtube-section/YoutubeSection";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-inner-wrapper ">
        <Hero />
        <YoutubeSection />
      </div>
    </div>
  );
};

export default Home;
