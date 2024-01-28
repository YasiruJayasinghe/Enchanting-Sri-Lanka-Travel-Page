import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const handlePlace = (e) => {
  event.preventDefault();
  const form = e.target;
  const placeName = form.placeName.value;
  const discription = form.discription.value;
  const fileUpload = form.fileUpload.value;
  const item = { placeName, discription, fileUpload };
  console.log(item);

  fetch("http://localhost:5000/items", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const CreatePlace = () => {
  return (
    <form onSubmit={handlePlace}>
      <div className="m-5">
        <div>
          <h2 className=" font-bold text-white text-5xl">Add a Place</h2>
          <p className="mt-2 text-sm text-white">
            Share your favorite spots, and cherished destinations with us.
          </p>

          <div className="mt-10 grid gap-y-6 sm:grid-cols-6">
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
                  rows={5}
                  className="bg-transparent block w-full rounded-md border-0 py-2.5 pl-2 text-white ring-2 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="image" className="text-xl font-medium text-white">
                Image of the Place:
              </label>
              <div className="mt-4 flex justify-center rounded-lg border border-dashed border-indigo-600 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-white"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-white">
                    <label
                      htmlFor="fileUpload"
                      className="relative cursor-pointer rounded-md bg-indigo-400 font-semibold text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-100"
                    >
                      <span>Upload a file</span>
                      <input
                        id="fileUpload"
                        name="fileUpload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-7 text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
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
