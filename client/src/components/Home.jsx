import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedItem = useLoaderData();
  return (
    <div>
      <div className="navbar bg-base-100 p-5 mb-10">
        <div className="navbar-start">
          <h1 className="text-5xl font-bold">
            Enchanting Sri Lanka:
            <br /> <span className="text-3xl">A Visual Journey</span>
          </h1>
        </div>
        <div className="navbar-end flex space-x-3 items-center">
          <div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
          <Link to={"/create-place"} className="btn btn-outline btn-info">
            Add a Place
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {loadedItem.map((item) => (
          <div key={item._id} className="card w-96 bg-base-300 shadow-xl ml-5">
            <figure>
              <img src={item.fileUpload} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">
                {item.placeName}
              </h2>
              <p className="mt-2">{item.discription}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent" onClick={() => window.location.href = item.linkUpload}>
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
