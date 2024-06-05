import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import Banner from "../components/Banner";
import Button from "../components/Button";
import { Helmet } from "react-helmet";
import "./Home.css";
import "/workspaces/luxury-bridal/src/GlobalStyles.css";

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
        <Button />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
