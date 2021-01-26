import * as React from "react";

type Props1 = {
  p: string;
  children: React.ReactNode;
};

const Sample1 = (props: Props1) => {
  return (
    <>
      {props.p}
      {props.children}
    </>
  );
};

type Props2 = {
  p: string;
};

// You can have children without declare with React.FC
const Sample2: React.FC<Props2> = (props) => {
  return (
    <>
      {props.p}
      {props.children}
    </>
  );
};

const FunctionOrFCComponent = () => {
  return (
    <>
      <Sample1 p="p1">
        <div>1</div>
      </Sample1>
      <Sample2 p="p2">
        <div>2</div>
      </Sample2>
    </>
  );
};

export default FunctionOrFCComponent;
