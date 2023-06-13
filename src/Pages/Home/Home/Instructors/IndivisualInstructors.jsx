
const IndivisualInstructors = () => {
    return (
        <div className="grid grid-cols-3 gap-4 py-5">
      <div>
        <div className="card h-full card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="card-image object-cover h-56 w-full"
              src="https://www.usatoday.com/gcdn/-mm-/e6f5ff966046f4bf939f56e06c17033cdbbc23fc/c=0-229-4500-2771/local/-/media/2017/07/10/USATODAY/USATODAY/636353007248947232-BTS-ELEM-MALE-TEACHERS-1.jpg?width=3200&height=1808&fit=crop&format=pjpg&auto=webp"
              alt="Pencil Art Class"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Instructor: John Doe!</h2>
            
            <p>Creativity: Pencil Sketching</p>
            <p>Number of students: <span className="font-bold">50</span></p>
            <div className="card-actions justify-center py-4 ">
              <button className="btn btn-primary">Visit Class</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="card-image object-cover h-56 w-full"
              src="https://lindastade.com/wp-content/uploads/2017/09/shutterstock_303112742-1.jpg"
              alt="Oil Pastel Drawing Class"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Instructor: Michael Smith Class</h2>
            
            <p>Creativity: Oil Pastel Drawing</p>
            <p>Number of students: <span className="font-bold">75</span></p>
            <div className="card-actions justify-center py-4 ">
              <button className="btn btn-primary">Visit Class</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="card-image object-cover h-56 w-full"
              src="https://www.workingdads.co.uk/wp-content/uploads/2020/01/AdobeStock_282194469-e1578051449881.jpeg"
              alt="Figure Drawing Workshop"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Instructor: Robert Johnson!</h2>
            
            <p>Creativity: Figure Drawing</p>
            <p>Number of students: <span className="font-bold">60</span></p>
            <div className="card-actions justify-center py-4 ">
              <button className="btn btn-primary">Visit Class</button>
            </div>
          </div>
        </div>
      </div>
      {/* Add similar code for the remaining classes */}
      <div>
        <div className="card h-full card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="card-image object-cover h-56 w-full"
              src="https://www.gigglesnhugs.com/wp-content/uploads/2022/09/Male-Teacher-Gifts.jpg"
              alt="Mandala Art Class"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Instructor: David Wilson!</h2>
            
            <p>Creativity: Mandala Art</p>
            <p>Number of students: <span className="font-bold">40</span></p>
            <div className="card-actions justify-center py-4 ">
              <button className="btn btn-primary">Visit Class</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="card-image object-cover h-56 w-full"
              src="https://media.istockphoto.com/id/1224311229/photo/happy-teacher-and-schoolboy-giving-each-other-high-five-on-a-class.jpg?s=612x612&w=0&k=20&c=o5kd0FVikynCdxcKXkBJad3nsKZiGmsD5aQaY49keXI="
              alt="Portrait Drawing Workshop"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Instructor: James Anderson</h2>
            
            <p>Creativity: Portrait Drawing</p>
            <p>Number of students: <span className="font-bold">55</span></p>
            <div className="card-actions justify-center py-4 ">
              <button className="btn btn-primary">Visit Class</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="card-image object-cover h-56 w-full"
              src="https://www.uwa.edu.au/seek-wisdom/-/media/Project/UWA/UWA/Other/rsz_1gettyimages-107983589.jpg?w=1440&hash=EC9C7EAB5023F840A03E53A29C223198"
              alt="Watercolor Painting Class"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Instructor: Christopher Thompson</h2>
            
            <p>Creativity: Watercolor Painting</p>
            <p>Number of students: <span className="font-bold">45</span></p>
            <div className="card-actions justify-center py-4 ">
              <button className="btn btn-primary">Visit Class</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default IndivisualInstructors;