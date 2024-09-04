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
  console.log(listId);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 [&_img]:h-full">
        {!isNaN(listId) && listId > 0
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
    </>
  );
}

export default ContentCard;
