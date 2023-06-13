import { Helmet } from "react-helmet";
import useInstructors from "../../hooks/useInstructors";
import SingleInstructoe from "./SingleInstructoe";

const InstructorPage = () => {
  const [instructor] = useInstructors();
  console.log(instructor);
  
  return (
    <div>
        <Helmet>
            <title> Instructor | ArtOne</title>
        </Helmet>
      <h2 className="text-center font-bold text-4xl py-5">Our Instructors</h2>
      <div className="grid md:grid-cols-3 gap-4 my-5">
        {instructor.map(instructor => (
          <SingleInstructoe key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default InstructorPage;
