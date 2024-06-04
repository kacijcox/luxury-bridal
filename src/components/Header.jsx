import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import pic4 from "/workspaces/luxury-bridal/src/pictures/pic4.jpeg";

const Header = () => {
  return (
    <div className="center-container">
      <div className="card mb-3 mt-1" style={{ maxWidth: "940px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pic4} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="header-text">
                "We specialize in crafting <i>timeless</i> looks that capture
                the essence of&nbsp;
                <b>sophistication</b>, ensuring every bride feels like royalty
                on her special day."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
