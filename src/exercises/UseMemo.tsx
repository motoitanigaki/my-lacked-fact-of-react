// useMemo：return value. prevent this component from being rendered when its not necessary
// useCallback：return function
// Memo：prevent component inside Memo from being rendering if props is the same.
//     　if props has callback function, still rendered cause function is reference
//     　in that case, you need to wrap the callback by useCallback

// https://www.youtube.com/watch?v=THL1OPn72vo&ab_channel=WebDevSimplified
// https://www.youtube.com/watch?v=THL1OPn72vo&ab_channel=WebDevSimplified
// https://qiita.com/soarflat/items/b9d3d17b8ab1f5dbfed2#usememo-%E3%81%AE%E6%A7%8B%E6%96%87
// https://www.youtube.com/watch?v=00RoZflFE34&ab_channel=BenAwad

import { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const slow = (someNum: number) => {
    for (let index = 0; index < someNum * 100000000; index++) {}
  };

  // this makes setCount2 slow as called every time rendered.
  //   slow(count1);

  // this does not make setCount2 slow as count1 is still the same
  useMemo(() => slow(count1), [count1]);

  // also, may be a solution for referential equality bug
  // someObject is different everytime the component re-rendered is you do this.
  //   const someObject = {};
  // but with useMemo, will be always the same
  const someObject = useMemo(() => {}, []);
  useEffect(() => {
    console.log("someObject changed");
  }, [someObject]);

  return (
    <>
      <button
        onClick={() => {
          setCount1((prev) => {
            return prev + 1;
          });
        }}
      >
        {count1}
      </button>
      <button
        onClick={() => {
          setCount2((prev) => {
            return prev + 1;
          });
        }}
      >
        {count2}
      </button>
    </>
  );
};

export default UseMemo;
