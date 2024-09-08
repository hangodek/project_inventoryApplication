import axios from "axios";

function ListBy() {
  const baseUrl = "http://localhost:3000";

  function handleSearch(e) {
    e.preventDefault();

    const searchBy = document.getElementById("searchBy").value;
    // console.log(searchBy);
    // console.log("Send");

    // const formData = new FormData();
    // formData.append("searchBy", searchBy);

    const url = `${baseUrl}?searchBy=${encodeURIComponent(searchBy)}`;

    axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      <div className="w-full">
        <form className="flex justify-evenly">
          <label htmlFor="searchBy">
            <input
              type="text"
              name="searchBy"
              id="searchBy"
              placeholder="Search"
              className="p-2"
            />
          </label>
          <button
            onClick={handleSearch}
            className="bg-white rounded-lg p-2 w-20"
          >
            Go
          </button>
        </form>
      </div>
      <div className="w-full">
        <select
          name="listby"
          id="listby"
          className="w-full border-2 border-black rounded-md"
        >
          <option value="#">Most Recent</option>
          <option value="#">Most Popular</option>
          <option value="#">Oldest</option>
        </select>
      </div>
    </>
  );
}

export default ListBy;
