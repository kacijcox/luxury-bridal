import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet";
import "./Home.css";

function Home() {
  return (
    <div>
      <Helmet>
        <title>The Luxury Bridal | Home</title>
      </Helmet>
      <div className="home-container">
        <Navbar />
        <Header />
        <Rating />
        <Banner />
        <div className="button-container">
          <button
            type="button"
            className="btn btn-primary custom-button"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            Book Now
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
