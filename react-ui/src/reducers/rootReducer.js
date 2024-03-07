import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import weatherForecastReducer from "./weatherReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  weather: weatherForecastReducer,
});

export default rootReducer;
