import React, { useState } from "react";
import styled from "styled-components";
import backgroundVideo from "../component/layout/weather.mp4"; // Import your local video file
// Styled components for different elements
const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const WeatherContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  color: #fff;
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 10px;
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const WeatherInfo = styled.div`
  text-align: center;

  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

const api = {
  key: "3a5f276a985df9b405cba168523abb86",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <Container>
      <VideoBackground autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <WeatherContainer>
        <Header>Enter your location</Header>

        <SearchContainer>
          <input
            type="text"
            placeholder="Enter city/town..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </SearchContainer>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <WeatherInfo>
            {/* Location */}
            <p>{weather.name}</p>

            {/* Temperature Celsius */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </WeatherInfo>
        ) : (
          ""
        )}
      </WeatherContainer>
    </Container>
  );
}

export default Weather;
