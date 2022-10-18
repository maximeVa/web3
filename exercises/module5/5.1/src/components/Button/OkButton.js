import React from "react";
import { useContext } from "react";
import { Context as CounterContext } from "../../contexts/CountersContext";

function OkButton() {
  const { ok, increaseOk } = useContext(CounterContext);

  return <button onClick={increaseOk}>Ok : {ok}</button>;
}

export default OkButton;
