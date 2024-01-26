import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="navbar bg-base-100 p-5">
      <div className="navbar-start">
        <h1 className="text-5xl font-bold">Enchanting Sri Lanka:<br/> <span className="text-3xl">A Visual Journey</span></h1>
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
        <Link to= {'/create-place'} className="btn btn-outline btn-info">Add a Place</Link>
      </div>
    </div>
  );
};

export default Home;
