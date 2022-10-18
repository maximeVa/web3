import "./App.css";
import BadButton from "../Button/BadButton";
import GoodButton from "../Button/GoodButton";
import OkButton from "../Button/OkButton";
import ResetButton from "../Button/ResetButton";

function App() {
  return (
    <div className="App">
      <BadButton></BadButton>
      <GoodButton></GoodButton>
      <OkButton></OkButton>
      <ResetButton></ResetButton>
    </div>
  );
}

export default App;
