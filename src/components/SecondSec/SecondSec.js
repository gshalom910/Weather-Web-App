import axios from "axios";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

export default function SecondSec(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(res) {
    setForecast(res.data.daily);
    setLoaded(true);
  }
  function day(num) {
    let date = new Date(forecast[num].dt * 1000);
    const [weekDays, ...time] = date.toDateString().split(" ");
    return weekDays;
  }

  if (loaded) {
    return (
      <section id="forecast-sec" className="row mx-4 my-1">
        {forecast?.map((dailyForecast, i) => {
          if (i < 6) {
            return (
              <Card
                key={i}
                day={day(i)}
                maxTemp={Math.round(dailyForecast.temp.max)}
                minTemp={Math.round(dailyForecast.temp.min)}
                icon={dailyForecast.weather[0].icon}
              />
            );
          } else {
            return null;
          }
        })}
      </section>
    );
  } else {
    const { lon, lat } = props.coords;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=616b14cbd38253313b3b8852fa77335d&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Oval
          height={80}
          width={80}
          color="#fff"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
}
