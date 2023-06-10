import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div  className="align-middle items-center text-center">
      <Carousel>
        <div>
          <img src="https://i.ibb.co/Ypdfzjt/Screenshot-2023-06-09-162921.png" />
        </div>
        <div>
          <img src="https://i.pinimg.com/736x/63/a0/40/63a04092a79b07c449998bb778ebd6da.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
