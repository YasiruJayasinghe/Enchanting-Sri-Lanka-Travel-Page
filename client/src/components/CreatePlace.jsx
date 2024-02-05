import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const CreatePlace = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const handlePlace = (e) => {
    event.preventDefault();
    const form = e.target;
    const placeName = form.placeName.value;
    const discription = form.discription.value;
    const fileUpload = form.fileUpload.value;
    const linkUpload = form.linkUpload.value;
    const item = { placeName, discription, fileUpload, linkUpload };
    console.log(item);
  
    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged > 0) {
          setSuccessMessage("Your Place added successfully!");
          form.reset();
        }
      });
  };
  return (
    <form onSubmit={handlePlace}>
             {successMessage && (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{successMessage}</span>
        </div>
      )}
      <div className="m-5">
        <div>
          <h2 className=" font-bold text-white text-5xl">Add a Place</h2>
          <p className="mt-2 text-sm text-white">
            Share your favorite spots, and cherished destinations with us.
          </p>

          <div className="mt-8 grid gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="placeName"
                className="text-xl font-medium text-white"
              >
                Place Name:
              </label>
              <div className="mt-4">
                <div className="flex rounded-md ring-2 ring-inset text-white focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="placeName"
                    id="placeName"
                    autoComplete="placeName"
                    className="flex-1 bg-transparent py-2.5 pl-2 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <label
                htmlFor="discription"
                className=" text-xl font-medium text-white"
              >
                Discription:
              </label>
              <div className="mt-4">
                <textarea
                  id="discription"
                  name="discription"
                  rows={4}
                  className="bg-transparent block w-full rounded-md border-0 py-2.5 pl-2 text-white ring-2 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="fileUpload"
                className="text-xl font-medium text-white"
              >
                Img URL:
              </label>
              <div className="mt-4">
                <div className="flex rounded-md ring-2 ring-inset text-white focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="fileUpload"
                    id="fileUpload"
                    autoComplete="fileUpload"
                    className="flex-1 bg-transparent py-2.5 pl-2 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Paste your image URL here"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="linkUpload"
                className="text-xl font-medium text-white"
              >
                Read More URL:
              </label>
              <div className="mt-4">
                <div className="flex rounded-md ring-2 ring-inset text-white focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="linkUpload"
                    id="linkUpload"
                    autoComplete="linkUpload"
                    className="flex-1 bg-transparent py-2.5 pl-2 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Paste your read more URL here"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-5 rounded-xl bg-indigo-600 px-10 py-2 text-xl font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePlace;
