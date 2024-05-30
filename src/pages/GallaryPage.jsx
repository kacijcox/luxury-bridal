import { Link } from "react-router-dom";
import Gallary from "../components/Gallary";
import Footer from "../components/Footer";
import Header from "../components/Header";

function GallaryPage() {
    return (
        <div>
            <Header />
            <Gallary />
            <Footer />       
        </div>
        
    );
}

export default GallaryPage;