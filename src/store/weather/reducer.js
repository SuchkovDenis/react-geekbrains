import {REQUEST_STATUS} from "../../utils/consts";
import {WEATHER_FAILURE, WEATHER_REQUEST, WEATHER_SUCCESS} from "./actions";

const initialState = {
    weather: {
        "temperature":"29 °C",
        "wind":"20 km/h",
        "description":"Partly cloudy",
        "forecast":[
            {
                "day":1,
                "temperature":"27 °C",
                "wind":"12 km/h"
            },
            {
                "day":2,
                "temperature":"22 °C",
                "wind":"8 km/h"
            }
        ]
    },
    request: {
        status: REQUEST_STATUS.IDLE,
        error: "",
    },
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_REQUEST: {
            return {
                ...state,
                request: {
                    status: REQUEST_STATUS.PENDING,
                    error: "",
                },
            };
        }
        case WEATHER_FAILURE: {
            return {
                ...state,
                request: {
                    status: REQUEST_STATUS.FAILURE,
                    error: action.error,
                },
            };
        }
        case WEATHER_SUCCESS: {
            return {
                ...state,
                weather: action.weather,
                request: {
                    status: REQUEST_STATUS.SUCCESS,
                    error: "",
                },
            };
        }
        default:
            return state;
    }
}
