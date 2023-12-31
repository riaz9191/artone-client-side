import { useEffect } from "react";
import { useState } from "react";

const useInstructors = () => {
  const [instructor, setInstructors] = useState([]);
  const [loading,setLoading] =useState(true)
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInstructors(data);
        setLoading(false)
      });
  }, []);
  return [instructor,loading]
};
export default useInstructors;
