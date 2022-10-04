import StatisticLine from "components/StatisticLine/StatisticLine";

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
                <StatisticLine text="Good" value={good} ></StatisticLine>
                <StatisticLine text="Neutral" value={neutral} ></StatisticLine>
                <StatisticLine text="Bad" value={bad} ></StatisticLine>
                <StatisticLine text="All" value={good + neutral + bad} ></StatisticLine>
                <StatisticLine text="Average" value={(good - bad) / (good + neutral + bad)} ></StatisticLine>
                <StatisticLine text="Positive" value={(good / (good + neutral + bad)) * 100} ></StatisticLine>
            </div>);
        }
    };

  return (
    display()
  );
};

export default Statistics;
