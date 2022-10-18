import React, { useState } from "react";

const Context = React.createContext(null);

// const ProviderWrapper = (props) => {
//   const [count, setLanguage] = useState("fr");
//   const pickLanguage = (newLanguage) => {
//     if (newLanguage !== "fr" && newLanguage !== "en")
//       throw "Invalid language selected : " + newLanguage;
//     setLanguage(newLanguage);
//   };

const ProviderWrapper = (props) => {
  const [good, setGood] = useState(0);
  const [ok, setOk] = useState(0);
  const [bad, setBad] = useState(0);  
  const [all, setAll] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const increaseOk = () => {
    setOk(ok + 1);
    setAll(all + 1);
  };

  const increaseBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  const resetAll = () => {
    setGood(0);
    setOk(0);
    setBad(0);
    setAll(0);
  };

  return (
    <Context.Provider
      value={{
        good,
        ok,
        bad,
        all,
        increaseGood,
        increaseOk,
        increaseBad,
        resetAll,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
  // const exposedValue = {
  //   language,
  //   pickLanguage,
  // };

  // return (
  //   <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  // );
export { Context, ProviderWrapper };