import Carousel from "react-bootstrap/Carousel";
import img1 from "../image/new1.jpg";
import img2 from "../image/new2.jpg";
import img3 from "../image/jpg3.webp";
import img4 from "../image/new3.jpg";
import img5 from "../image/new8.jpg";
import img6 from "../image/new5.jpg";
import img7 from "../image/new6.jpg";
import img8 from "../image/new7.jpg";
import "../style/AboutUs.css";

function AboutUs() {
  return (
    <div className="about">
      <Carousel className="about-carousel">
        <Carousel.Item className="carousel-item">
          <img className="img1" src={img1} alt="" />
          <Carousel.Caption className="caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img2" src={img2} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img3" src={img3} alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="img4" src={img4} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="img5" src={img5} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="img6" src={img6} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="img7" src={img7} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img className="img8" src={img8} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Null vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AboutUs;
