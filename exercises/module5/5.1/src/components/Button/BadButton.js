import React from "react";
import { useContext } from "react";
import { Context as CounterContext } from "../../contexts/CountersContext";

function BadButton() {
  const { bad, increaseBad } = useContext(CounterContext);

  return <button onClick={increaseBad}>bad : {bad}</button>;
}

export default BadButton;
