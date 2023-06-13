import React from "react";

const ClassesPage = () => {
  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-4xl py-5">Our Instructors</h2>
        <div className="grid md:grid-cols-3 gap-4 my-5">
          {instructor.map((instructor) => (
            <SingleInstructoe key={instructor._id} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
