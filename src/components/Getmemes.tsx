import { createRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "./Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const GetMemes = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeref = createRef<HTMLImageElement>();

  function addText() {
    setCount((prev) => prev + 1);
  }

  document.body.style.backgroundColor = "yellow";

  const imageUrl = params.get("url") || "";

  return (
    <>
      {imageUrl && (
        <div className="w-full bg-yellow-200 flex flex-col items-center gap-6 mt-10">
          <div ref={memeref}>
            <img
              className="rounded-xl h-[90vh]"
              src={imageUrl}
              alt="Selected Meme Template"
              width={"500px"}
            />

            {Array(count)
              .fill(0)
              .map((_, index) => (
                <Text key={index} />
              ))}
            <div className="flex gap-8"></div>

            <button
              onClick={addText}
              className="bg-sky-500 rounded-xl p-3 text-4xl"
            >
              Add Text
            </button>
            <button
              onClick={() => {
                exportComponentAsJPEG(memeref);
              }}
              className="text-white text-4xl p-3 mx-8 bg-green-600 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GetMemes;
