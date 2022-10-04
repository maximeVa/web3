const Statistics = ({ good, neutral, bad }) => {

    const display = () => {
        if(good == 0 && neutral == 0 && bad == 0){
            return (<div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>);
        }else{
            return (<div>
                <h2>Statistics</h2>
                <p>Good {good}</p>
                <p>Neutral {neutral}</p>
                <p>Bad {bad}</p>
                <p>All {good + neutral + bad}</p>
                <p>Average {(good - bad) / (good + neutral + bad)}</p>
                <p>Positive {(good / (good + neutral + bad)) * 100} %</p>
            </div>);
        }
    };

  return (
    display()
  );
};

export default Statistics;
