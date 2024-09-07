import { useEffect, useState } from "react";
import axios from "axios";

import animeImage1 from "../../assets/animeImage/anime1.jpg";
import animeImage2 from "../../assets/animeImage/anime2.jpg";
import animeImage3 from "../../assets/animeImage/anime3.jpg";
import animeImage4 from "../../assets/animeImage/anime4.jpg";
import animeImage5 from "../../assets/animeImage/anime5.jpg";
import animeImage6 from "../../assets/animeImage/anime6.jpg";
import animeImage7 from "../../assets/animeImage/anime7.jpg";
import animeImage8 from "../../assets/animeImage/anime8.jpg";
import animeImage9 from "../../assets/animeImage/anime9.jpg";
import animeImage10 from "../../assets/animeImage/anime10.jpg";

const myAnime = [
  {
    mainId: 1,
    src: [
      { id: 1, src: animeImage1 },
      { id: 2, src: animeImage2 },
      { id: 3, src: animeImage3 },
      { id: 4, src: animeImage4 },
      { id: 5, src: animeImage5 },
      { id: 6, src: animeImage6 },
      { id: 7, src: animeImage7 },
      { id: 8, src: animeImage8 },
    ],
  },
  {
    mainId: 2,
    src: [
      { id: 9, src: animeImage9 },
      { id: 10, src: animeImage10 },
    ],
  },
];

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
    temp2.push(anime.imagepath);
  });

  // setmyList(temp2);

  // console.log(temp2);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 [&_img]:h-[334px]">
        {/* {!isNaN(listId) && listId > 0
          ? myAnime
              .filter((animeObj) => animeObj.mainId === listId)
              .map((animeObj) =>
                animeObj.src.map((anime) => {
                  return <img key={anime.id} src={anime.src} alt="" />;
                })
              )
          : myAnime.map((animeObj) => {
              return animeObj.src.map((anime) => {
                return <img key={anime.id} src={anime.src} alt="" />;
              });
            })} */}
        {temp2.map((anime, index) => {
          return (
            <img key={index} src={`http://localhost:3000/${anime}`} alt="" />
          );
        })}
      </div>
      <div className="flex justify-center gap-4">
        {myAnime.map((animeObj) => {
          return (
            <form key={animeObj.mainId} action={`/${animeObj.mainId}`}>
              <button>{animeObj.mainId}</button>
            </form>
          );
        })}
      </div>
      <div>
        <form encType="multipart/form-data">
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
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContentCard;
