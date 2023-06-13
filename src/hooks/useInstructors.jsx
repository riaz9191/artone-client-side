import { useState } from "react";

const useInstructors = ()=>{
    const [instructor,setInstructors] = useState([])
    fetch()
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setInstructors(data);
    })
}
export default useInstructors;