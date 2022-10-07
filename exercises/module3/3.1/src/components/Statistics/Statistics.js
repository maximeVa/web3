import StatisticLine from "components/StatisticLine/StatisticLine";

const Statistics = ({ good, neutral, bad }) => {

    const display = () => {
        if(good + neutral + bad == 0){
            return (<div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>);
        }else{
            return (<div>
                <h2>Statistics</h2>
                <table>
                    <tr>
                        <td><StatisticLine text="Good" value={good} ></StatisticLine></td>
                    </tr>
                    <tr>
                        <td><StatisticLine text="Neutral" value={neutral} ></StatisticLine></td>
                    </tr>
                    <tr>
                        <td><StatisticLine text="Bad" value={bad} ></StatisticLine></td>
                    </tr>
                    <tr>
                        <td><StatisticLine text="All" value={good + neutral + bad} ></StatisticLine></td>
                    </tr>
                    <tr>
                        <td><StatisticLine text="Average" value={(good - bad) / (good + neutral + bad)} ></StatisticLine></td>
                    </tr>
                    <tr>
                        <td><StatisticLine text="Positive" value={(good / (good + neutral + bad)) * 100} ></StatisticLine></td>
                    </tr>
                    </table>
            </div>);
        }
    };

  return (
    display()
  );
};

export default Statistics;
