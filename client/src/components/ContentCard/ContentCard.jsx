import { useEffect, useState } from "react";
import axios from "axios";

function ContentCard({ id }) {
    const listId = parseInt(id);
    const baseUrl = "http://localhost:3000";
    const [myList, setmyList] = useState([]);

    function handleSubmit(e) {
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
    }

    function handleDelete(e) {
        const animeToBeDeleted = e.target.value;
        axios.delete(baseUrl, {
            data: { animeToBeDeleted },
        });
    }

    function handleSearch(e) {
        e.preventDefault();
        const searchBy = document.getElementById("searchBy").value;
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
            setmyList(temp.data);
        };

        data();
    }, []);

    const animeList = Object.entries(myList).map(([key, anime]) => anime);

    return (
        <>
            <div className="w-full mb-4">
                <form className="flex justify-evenly gap-2 sm:gap-4">
                    <label htmlFor="searchBy" className="flex-grow">
                        <input
                            type="text"
                            name="searchBy"
                            id="searchBy"
                            placeholder="Search"
                            className="p-2 w-full border rounded"
                        />
                    </label>
                    <button
                        onClick={handleSearch}
                        className="bg-white rounded-lg p-2 w-20 border sm:w-24"
                    >
                        Go
                    </button>
                </form>
            </div>

            <div className="w-full mb-4">
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

            <div className="flex gap-2 mb-4 md:flex">
                {animeList.map((anime, index) => (
                    <form
                        key={index}
                        className=" [&_button]:absolute [&_button]:right-1 [&_button]:top-1 [&_button]:rounded-full [&_button]:bg-white [&_button]:w-6"
                    >
                        <div className="relative w-fit md:w-fit">
                            <img
                                src={`http://localhost:3000/${anime.imagepath}`}
                                alt={anime.name}
                                className="object-cover h-80 sm:h-72 md:w-60 md:h-[32rem]"
                            />
                            <button
                                onClick={handleDelete}
                                value={anime.name}
                                className="text-red-600"
                            >
                                X
                            </button>
                        </div>
                    </form>
                ))}
            </div>

            <div className="flex justify-center gap-4 mb-4"></div>

            <div className="w-full">
                <form
                    encType="multipart/form-data"
                    className="flex flex-col gap-4"
                >
                    <label htmlFor="submitName" className="flex flex-col">
                        Anime Name:
                        <input
                            type="text"
                            name="submitName"
                            id="submitName"
                            className="p-2 border rounded"
                        />
                    </label>
                    <label htmlFor="submitStudio" className="flex flex-col">
                        Studio Name:
                        <input
                            type="text"
                            name="submitStudio"
                            id="submitStudio"
                            className="p-2 border rounded"
                        />
                    </label>
                    <label htmlFor="submitImage" className="flex flex-col">
                        Image: (Required)
                        <input
                            type="file"
                            name="submitImage"
                            id="submitImage"
                            className="p-2 border rounded"
                        />
                    </label>
                    <button
                        onClick={handleSubmit}
                        className="bg-white p-2 rounded border"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default ContentCard;
