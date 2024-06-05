import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import ServicesBanner from "../components/ServicesBanner";
import "./ServicesPage.css";

function ServicesPage() {
  return (
    <div>
      {" "}
      <Helmet>
        <title>The Luxury Bridal | Services</title>
      </Helmet>
      <div className="services-container">
        <Navbar />
        <ServicesBanner />
        <Services />
        <Footer />
      </div>
    </div>
  );
}

export default ServicesPage;
