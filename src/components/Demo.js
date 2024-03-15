import { useCallback, useMemo, useState } from "react";
import { findNthPrime } from "./utils/Constants";

const Demo = () => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);
  console.log("rerendered...");
  //const normal_prime = () => findNthPrime(num);
  //heavy operation
  // const prime = useMemo(() => {
  //   console.log("hello prime");
  //   return findNthPrime(num);
  // }, [num]);
  
  const prime = useCallback(() => {
    console.log("hello prime");
    return findNthPrime(num);
  }, [num]);

  return (
    <>
      <div className="m-4 p-2 w-96 h-96 border border-black">
        <h2> Demo</h2>
        <input
          className="border border-black w-72"
          type="number"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <div> Prime No : {prime()}</div>
        {/* <div>Memoized usecallback Prime No : {prime1()}</div> */}
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Count : {count}
          </button>
        </div>
      </div>
    </>
  );
};

export default Demo;
