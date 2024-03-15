import { useState, useRef } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);

  const ref = useRef(0);
  console.log(ref);
  return (
    <div className="m-4 p-2 w-96 h-96 border border-black">
      <div key="0">
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            console.log("x value is", x);
            return (x = x + 1);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let x= {x}</span>
      </div>
      <div key="1">
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            console.log("Ref value is", ref.current);
            return (ref.current = ref.current + 1);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Let ref= {ref.current}</span>
      </div>
      <div key="2">
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            console.log("y value is", y);
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-xl">Let = {y}</span>
      </div>
    </div>
  );
};

export default Demo2;
