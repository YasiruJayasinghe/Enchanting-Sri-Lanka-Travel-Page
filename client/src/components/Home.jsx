import { Link, useLoaderData } from "react-router-dom";
import React, { useState } from "react";

const Home = () => {
  const loadedItem = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");



  const filteredItems = loadedItem.filter((item) =>
    item.placeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = (itemId) => {
    fetch(`http://localhost:5000/items/${itemId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to delete item');
        }
        return res.json();
      })
      .then((data) => {
        // Check if the response indicates success
        if (data && data.message === "Item deleted successfully") {
          setSuccessMessage("Your Place deleted successfully!");
        } else {
          // Handle deletion failure
          throw new Error('Deletion failed');
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
        // Handle error, show error message, etc.
      });
  };
  

  return (
    <div>
      <div className="navbar bg-base-100 p-5 mb-10">
        <div className="navbar-start">
          <h1 className="text-5xl font-bold ml-5">
            <span className="text-8xl">E</span>nchanting Sri Lanka:
            <br /> <span className="text-3xl ml-1">A Visual Journey</span>
          </h1>
        </div>
        <div className="navbar-end flex space-x-3 items-center">
          <div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <Link to={"/create-place"} className="btn btn-outline btn-info">
            Add a Place
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-12">
        {filteredItems.map((item) => (
          <div
            key={item._id}
            className="card w-96 bg-base-300 shadow-xl ml-10  "
          >
            <figure className="h-60 object-cover">
              <img src={item.fileUpload} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl justify-center ">
                {item.placeName}
              </h2>
              <p className="mt-2 text-justify">{item.discription}</p>
              <div className="card-actions justify-between">
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-accent"
                  onClick={() => (window.location.href = item.linkUpload)}
                >
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
