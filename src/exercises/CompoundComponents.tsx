// Tried to apply compound component pattern
// https://www.youtube.com/watch?list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u&v=415EfGPuhSo&feature=emb_title&ab_channel=KentC.Dodds

import React, { createContext, useContext, useState, ReactNode } from "react";

type tab = "1" | "2";

type Props = {
  children: ReactNode;
};

const Tab = (props: Props) => {
  const [tab, setTab] = useState<tab>("1");
  return (
    <tabContext.Provider value={tab}>
      <div>
        <button onClick={() => setTab("1")}>One</button>
        <button onClick={() => setTab("2")}>Two</button>
      </div>
      {props.children}
    </tabContext.Provider>
  );
};

const tabContext = createContext<tab | undefined>(undefined);

const useTabContext = () => {
  const context = useContext(tabContext);
  if (!context) {
    throw new Error("Outside of component");
  }
  return context;
};

const One = () => {
  const tab = useTabContext();
  return tab === "1" ? <>This is for tab 1</> : null;
};
Tab.One = One;

const Two = () => {
  const tab = useTabContext();
  return tab === "2" ? <>This is for tab 2</> : null;
};
Tab.Two = Two;

const CompoundComponents = () => {
  return (
    <Tab>
      <Tab.One />
      <Tab.Two />
    </Tab>
  );
};

export default CompoundComponents;
