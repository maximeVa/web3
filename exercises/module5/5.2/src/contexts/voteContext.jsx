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
  const [opinion, setOpinion] = useState(0);
  const [all, setAll] = useState(0);

  const increaseOpinion = (opinion) => {
    setOpinion(opinion + 1);
    setAll(all + 1);
  };

  const resetAll = () => {
    setOpinion(0);
    setAll(0);
  };

  return (
    <Context.Provider
      value={{
        opinion,
        all,
        increaseOpinion,
        resetAll,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

  
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