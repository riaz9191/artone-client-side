import { useEffect } from "react";
import { useState } from "react";

const useClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading,setLoading] =useState(true)
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setClasses(data);
        setLoading(false)
      });
  }, []);
  return [classes,loading]
};
export default useClasses;
