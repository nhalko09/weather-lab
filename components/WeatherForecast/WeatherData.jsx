const WeatherData = ({ day, conditions, time }) => {
    return (
      <div>
        <h3>{day}</h3>
        <p>{conditions}</p>
        <p>{time}</p>
      </div>
    );
  };
  
  export default WeatherData;
  