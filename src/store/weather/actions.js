import { API_URL } from "../../utils/consts";

export const WEATHER_REQUEST = "WEATHER::REQUEST";
export const WEATHER_SUCCESS = "WEATHER::SUCCESS";
export const WEATHER_FAILURE = "WEATHER::FAILURE";

export const weatherRequest = () => ({
    type: WEATHER_REQUEST,
});

export const weatherSuccess = (weather) => ({
    type: WEATHER_SUCCESS,
    weather,
});

export const weatherFailure = (error) => ({
    type: WEATHER_FAILURE,
    error,
});

export const getWeather = (city) => (dispatch) => {
    dispatch(weatherRequest(city));

    fetch(API_URL + city)
        .then((response) => {
            if (!response.ok) {
                throw new Error("request failed with status " + response.status);
            }

            return response.json();
        })
        .then((data) => {
            dispatch(weatherSuccess(data));
        })
        .catch((err) => {
            dispatch(weatherFailure(err.message));
        });
};
