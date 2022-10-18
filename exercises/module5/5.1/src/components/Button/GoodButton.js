import React from "react";
import { useContext } from "react";
import { Context as CounterContext } from "../../contexts/CountersContext";

function BadButton() {
  const { good, increaseGood } = useContext(CounterContext);

  return <button onClick={increaseGood}>good : {good}</button>;
}

export default BadButton;
