import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getWeather} from "../../store/weather/actions";
import {REQUEST_STATUS} from "../../utils/consts";

export const Weather = () => {
    const { city } = useParams();
    const weather = useSelector((state) => state.weather.weather);
    const weatherStatus = useSelector((state) => state.weather.request.status);
    const weatherError = useSelector((state) => state.weather.request.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeather(city));
    }, []);

    if (weatherStatus === REQUEST_STATUS.PENDING) {
        return <h3>Загрузка...</h3>;
    }

    if (weatherError) {
        return <h3>Ошибка: {weatherError}</h3>;
    }

    return (
        <>
            <h2>{ city }</h2>
            <i>{weather.description}</i>
            <div>
                <b>Температура: </b>
                {weather.temperature}
            </div>
            <div>
                <b>Ветер: </b>
                {weather.wind}
            </div>
            <h3>Прогноз на 2 дня:</h3>
            <div>
                {weather.forecast.map(forecast =>
                    <div>
                        <h5>День {forecast["day"]} - {forecast.temperature}</h5>
                    </div>
                )}
            </div>
        </>
    );
}
