import React from "react";

const Classes = () => {
  return (
    <div className="grid grid-cols-3 gap-4 py-5">
      <div>
        <div className="card h-full card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="card-image object-cover h-56 w-full"
              src="https://media.istockphoto.com/id/157332289/photo/sketch-artist.jpg?s=612x612&w=0&k=20&c=RSkQeiLN1X8b1ls5ZtSzMQgtKSxlFXVAnIXzdnmGw1s="
              alt="Pencil Art Class"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pencil Art Class!</h2>
            <p>If a dog chews shoes, whose shoes does he choose?</p>
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
              src="https://i.ytimg.com/vi/2Qw-6YgUjVc/maxresdefault.jpg"
              alt="Oil Pastel Drawing Class"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Oil Pastel Drawing Class</h2>
            <p>If a dog chews shoes, whose shoes does he choose?</p>
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
              src="https://static.skillshare.com/uploads/video/thumbnails/567ef4d69bfee71caae5df574f133176/448-252"
              alt="Figure Drawing Workshop"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Figure Drawing Workshop!</h2>
            <p>If a dog chews shoes, whose shoes does he choose?</p>
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
              src="https://i0.wp.com/mandalameadow.com/wp-content/uploads/2020/12/Mandala-art-classes-for-beginners-scaled.jpg?fit=2560%2C1707&ssl=1"
              alt="Mandala Art Class"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mandala Art Class!</h2>
            <p>If a dog chews shoes, whose shoes does he choose?</p>
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
              src="https://cdn.class101.net/images/6683a18c-8c54-4461-bff8-614cde0a3d3e/1200x630"
              alt="Portrait Drawing Workshop"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Portrait Drawing Workshop</h2>
            <p>If a dog chews shoes, whose shoes does he choose?</p>
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
              src="https://www.filepicker.io/api/file/YiV4aNCrSCGwKASO5rjv"
              alt="Watercolor Painting Class"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Watercolor Painting Class</h2>
            <p>If a dog chews shoes, whose shoes does he choose?</p>
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

export default Classes;
