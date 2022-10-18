import React from "react";
import { useContext } from "react";
import { Context as CounterContext } from "../../contexts/CountersContext";

function ResetButton() {
  const { all, resetAll } = useContext(CounterContext);

  return <button onClick={resetAll}>Reset</button>;
}

export default ResetButton;
