import { useEffect, useState } from "react";
import axios from "axios";

function ContentCard({ id }) {
  const listId = parseInt(id);
  // console.log(listId);

  const baseUrl = "http://localhost:3000";

  const [myList, setmyList] = useState([]);

  function handleSubmit(e) {
    // e.preventDefault();

    const submitName = document.getElementById("submitName").value;
    const submitStudio = document.getElementById("submitStudio").value;
    const submitImage = document.getElementById("submitImage").files[0];

    const formData = new FormData();
    formData.append("submitName", submitName);
    formData.append("submitStudio", submitStudio);
    formData.append("submitImage", submitImage);

    axios.post(baseUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // console.log(submitName, submitStudio);
  }

  function handleDelete(e) {
    // e.preventDefault();
    const animeToBeDeleted = e.target.value;
    // console.log(animeToBeDeleted);

    axios.delete(baseUrl, {
      data: { animeToBeDeleted },
    });
  }

  function handleSearch(e) {
    e.preventDefault();

    const searchBy = document.getElementById("searchBy").value;
    // console.log(searchBy);
    // console.log("Send");

    // const formData = new FormData();
    // formData.append("searchBy", searchBy);

    const url = `${baseUrl}?searchBy=${encodeURIComponent(searchBy)}`;

    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setmyList(response.data);
      });
  }

  useEffect(() => {
    const data = async () => {
      const temp = await axios.get(baseUrl);
      // console.log(temp.data);
      setmyList(temp.data);
    };

    data();
  }, []);

  const temp = Object.entries(myList);
  const temp2 = [];

  // console.log(temp);
  // console.log(temp2);

  const animeArr = temp.map(([key, anime]) => {
    temp2.push(anime);
  });

  // setmyList(temp2);

  // console.log(temp2);

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

      <div className="grid grid-cols-2 gap-2 [&_img]:h-[334px]">
        {temp2.map((anime, index) => {
          return (
            <form
              key={index}
              className="relative [&_button]:absolute [&_button]:right-1 [&_button]:top-1 [&_button]:rounded-full [&_button]:bg-white [&_button]:w-6"
            >
              <img src={`http://localhost:3000/${anime.imagepath}`} alt="" />
              <button onClick={handleDelete} value={anime.name}>
                X
              </button>
            </form>
          );
        })}
      </div>
      <div className="flex justify-center gap-4"></div>
      <div className="">
        <form encType="multipart/form-data" className="flex flex-col gap-4">
          <label htmlFor="submitName">
            Anime Name:
            <input type="text" name="submitName" id="submitName" />
          </label>
          <label htmlFor="submitStudio">
            Studio Name:
            <input type="text" name="submitStudio" id="submitStudio" />
          </label>
          <label htmlFor="">
            Image: (Required)
            <input type="file" name="submitImage" id="submitImage" />
          </label>
          <button onClick={handleSubmit} className="bg-white p-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContentCard;
