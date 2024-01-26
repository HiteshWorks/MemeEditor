import { useRef, useState } from "react";
import Draggable from "react-draggable";
const Text = () => {
  const [EditMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Double Click to Edit!");
  const inputref = useRef<HTMLInputElement>(null);

function onclick(){
    inputref.current?.select()
    
}

  return (
    <Draggable>
      {EditMode ? (
        <input
        ref={inputref}
          className="text-5xl  bg-black text-red-600 font-bold "
          type="text"
          onClick={onclick}
          onDoubleClick={()=> setEditMode(false)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <div
          className="text-5xl text-red-600 font-bold"
          onDoubleClick={() => {
            setEditMode(true);
          }}
        >
          {value}
        </div>
      )}
    </Draggable>
  );
};

export default Text;
