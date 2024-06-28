import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import weatherForecastReducer from "./weatherReducer";
import propertyReducer from "./propertyReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  weather: weatherForecastReducer,
  property: propertyReducer,
});

export default rootReducer;
