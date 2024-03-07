import React, { useState, useEffect } from 'react';
import {
    useDispatch,
    useSelector
} from "react-redux";
import PropTypes from 'prop-types';

import { Card, Grid } from "@mui/material";
import SuiBox from "../../../../components/SuiBox";
import SuiTypography from "../../../../components/SuiTypography";
import { fetchWeatherForecast } from 'actions/weatherActions';


const CurrentWeather = ({ weatherData }) => {
    const {
        city,
        temperature,
        temp_max,
        temp_min,
        feels_like,
        weather_description,
        humidity,
        weather_icon,
      } = weatherData;
    const [inputCity, setInputCity] = useState(city);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setInputCity(event.target.value);
      };

    const handleSearch = () => {
        dispatch(fetchWeatherForecast(inputCity));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter city name"
                value={inputCity}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>

            {weatherData && (
                <Card>
                    <SuiBox p={2}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={6}>
                                <SuiBox display="flex" flexDirection="column" height="100%">
                                    <SuiTypography variant="h4" fontWeight="medium" textColor="dark">
                                        {weatherData.city && weatherData.city.toUpperCase()}
                                    </SuiTypography>
                                    <SuiBox>
                                        <SuiTypography variant="h1" textColor="info" fontWeight="bold">
                                            {Math.round(temperature)}°C
                                        </SuiTypography>
                                    </SuiBox>
                                    <SuiTypography variant="h6" fontWeight="medium" textColor="dark">
                                        {weather_description && weather_description.toUpperCase()}
                                    </SuiTypography>
                                    <SuiBox>
                                        <SuiTypography variant="h6" fontWeight="light" textColor="dark">
                                            FEELS LIKE: {Math.round(feels_like)}°C
                                        </SuiTypography>
                                        <SuiTypography variant="h6" fontWeight="light" textColor="dark">
                                            MIN - MAX: {Math.round(temp_min)}°C - {Math.round(temp_max)}°C
                                        </SuiTypography>
                                        <SuiTypography variant="h6" fontWeight="light" textColor="dark">
                                            HUMIDITY: {humidity}%
                                        </SuiTypography>
                                    </SuiBox>
                                </SuiBox>
                            </Grid>
                            <Grid item xs={12} lg={6} className="ml-auto relative">
                                <SuiBox
                                    height="100%"
                                    display="grid"
                                    justifyContent="center"
                                    alignItems="center"
                                    backgroundColor="info"
                                    borderRadius="lg"
                                    backgroundGradient
                                >
                                    <SuiBox component="img"
                                        src={`weather_icons/${weather_icon}.png`}
                                        alt="N/A"
                                        width="100%"
                                    />
                                </SuiBox>
                            </Grid>
                        </Grid>
                    </SuiBox>
                </Card>
            )}
        </div>
    );
};

const WeatherContainer = () => {
    const weatherData = useSelector((state) => state.weather.weather_forecast);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherForecast(weatherData.city));
      }, [dispatch, weatherData.city]);

    return (
        <Card>
            <CurrentWeather weatherData={weatherData} />
        </Card>
    );
};


CurrentWeather.propTypes = {
    weatherData: PropTypes.shape({
      id: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
      weather_description: PropTypes.string.isRequired,
      wind_speed: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      weather_icon: PropTypes.string.isRequired,
      api_response_id: PropTypes.number.isRequired,
      timezone: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      longitude: PropTypes.number.isRequired,
      latitude: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
    }).isRequired,
  };

export default WeatherContainer;
