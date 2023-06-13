import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import Instructors from "./Instructors/Instructors";

const Home = () => {
  return (
      <div className="container mx-auto">
        <Banner />
        <PopularClasses></PopularClasses>
        <Instructors></Instructors>
      </div>
  );
};

export default Home;
