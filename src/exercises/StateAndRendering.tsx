import { useEffect, useState } from "react";

export default () => {
  const [counter, setCounter] = useState<number>(0);

  // Won't work because it is not a state.
  // const counter = 0;

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  // This also works. State changed then new setTimeout created
  //   useEffect(() => {
  //     const id = setTimeout(() => {
  //       setCounter(counter + 1);
  //     }, 1000);
  //     return () => {
  //       clearTimeout(id);
  //       console.log("Timeout cleared");
  //     };
  //   }, [counter]);

  //  This will fire the rendering as it changes the state.
  //  But below also will be evaluated again and again ...
  //   const id = setTimeout(() => {
  //     setCounter(counter +1);
  //   }, 1000);

  console.log("Evaluated as state changed");

  return <>{counter}</>;
};
