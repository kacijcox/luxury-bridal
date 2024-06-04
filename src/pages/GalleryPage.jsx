import Gallery from "../components/Gallery";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GalleryBanner from "../components/GalleryBanner";
import "./GalleryPage.css";

function GalleryPage() {
  return (
    <div>
      {" "}
      <Helmet>
        <title>The Luxury Bridal | Gallery</title>
      </Helmet>
      <div className="gallery-container">
        <Navbar />
        <GalleryBanner />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default GalleryPage;
