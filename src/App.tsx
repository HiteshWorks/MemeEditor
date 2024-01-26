import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  interface Meme {
    url: string;
    name: string;
  }
 
  const navigate = useNavigate();
  const [memes, setMemes] = useState<Meme[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setMemes(data.data.memes);
    };

    fetchData();
  }, []);

  function GoToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="Container bg-black h-full w-full">
        <div className="text-6xl flex mx-auto w-[32vw] bg-red-600 rounded-xl p-2 text-white">
          Meme Templates
        </div>

        <div className="grid grid-cols-3 mt-16 gap-10">
          {memes?.map((meme, index) => (
            <div  key={index}>
             
                <div onClick={()=> navigate(`/edit?url=${meme.url}`)} className=" memeContainer hover:scale-110 p-2 cursor-pointer flex flex-col gap-0 border-2 bg-white border-gray-400 shadow-lg shadow-gray-500 rounded-lg">
                  <img
                    className="h-[30vh] w-[30vw]"
                    src={meme.url}
                    alt="memeImage"
                  />
                  <div
                    className="text-black font-extrabold flex mx-auto"
                    key={index}
                  >
                    {meme.name}
                  </div>
                 
                </div>
             
            </div>
          ))}
        </div>
        <button
          className="bg-sky-400 hover:bg-sky-300 text-4xl mb-6 text-white rounded-xl p-1 flex mx-auto"
          onClick={GoToTop}
        >
          Go to Top
        </button>
      </div>
    </>
  );
}

export default App;
