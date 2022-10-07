import { useState } from "react";
import Button from "components/Button/Button";
import Statistics from "components/Statistics/Statistics";
import Loading from "components/Loading/Loading";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [loading, setLoading] = useState(true);

  const changeCount = (delta) => {
    if (delta == 1) {
      setGood(good + 1);
    } else if (delta == 0) {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  const handleClick = (e) => {
    console.log(e.target.dataset.delta);
    return changeCount(e.target.dataset.delta);
  };

  //dès que 3 secondes sont passées, on incrémente loadout afin de refresh la page
  //et grâce au if, on affichera cette fois ci la bonne page
  setTimeout(function(){ setLoading(false)}, 3000);

  if (loading == true) {
    return <div><Loading></Loading></div>;
  } else {
    return (
      <div>
        <div>
          <h2>Give feedback</h2>
          <Button onClick={handleClick} text="Good" delta={1}>
            Good
          </Button>
          <Button onClick={handleClick} text="Neutral" delta={0}>
            Neutral
          </Button>
          <Button onClick={handleClick} text="Bad" delta={-1}>
            Bad
          </Button>
          <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
      </div>
    );
  }
};

export default App;
