const SingleInstructoe = ({instructor}) => {
    console.log(instructor);
    
    return (
      <div>
        <div className="card h-full card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="card-image object-cover h-56 w-full"
              src={instructor.Image}
              alt="Pencil Art Class"
            />
          </figure>
          <div className="card-body">
            <p>Name: {instructor.Name}</p>
            <p>Email: {instructor.Email}</p>
            <p>Number of Classes: <span className="font-bold">{instructor.number_of_classes}</span></p>
            
            <div className="card-actions justify-center py-4 ">
              <button className="btn btn-primary">Visit Class</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SingleInstructoe;
  