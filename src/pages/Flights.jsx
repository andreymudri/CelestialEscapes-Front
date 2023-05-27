import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../App.jsx";
import { FlightCard, FlightDetails, FlightTitle, FlightsContainer,FlightDetail } from "./styles/styles.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Flights() {
  const [flights, setFlights] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  useEffect(() => {
    axios
      .get(`${apiUrl}/flights`)
      .then((response) => {
        setFlights(response.data.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  function handleMinPriceChange(event){
    setMinPrice(event.target.value);
  };

  function handleMaxPriceChange(event) {
    setMaxPrice(event.target.value);
  };
  const filteredFlights = flights.filter(
    (flight) => flight.price >= minPrice && flight.price <= maxPrice +1
  );

  if (flights.length < 1) {
    return (
      <div>
        loading
      </div>
    )
  }
    if (flights.length >= 1) {

      return (<>
    <Header/>
        <FlightsContainer>
        <div>
      <div>
        <span>Minimum Price: </span>
        <input
          type="range"
          onChange={handleMinPriceChange}
          min={0}
          max={1500}
          step={50}
          value={minPrice}
          className="custom-slider"
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <span>Maximum Price: </span>
        <input
          type="range"
          onChange={handleMaxPriceChange}
          min={1000}
          max={2000}
          step={50}
          value={maxPrice}
          className="custom-slider"
        />
        <span>{maxPrice}</span>
      </div>
          </div>
          <div></div>

      {filteredFlights.map(flight => (
        <FlightCard key={flight.id}>
          <FlightTitle>{flight.name}</FlightTitle>
          <FlightDetails>
            <FlightDetail>
              <span>Airline:</span>
              <span>{flight.company}</span>
            </FlightDetail>
            <FlightDetail>
              <span>Departure:</span>
              <span>{flight.departure}</span>
            </FlightDetail>
            <FlightDetail>
              <span>Destination:</span>
              <span>{flight.destination}</span>
            </FlightDetail>
            <FlightDetail>
              <span>Departure Time:</span>
              <span>{new Date(flight.start_date).toLocaleDateString()}</span>
            </FlightDetail>
            <FlightDetail>
              <span>Arrival Time:</span>
              <span>{new Date(flight.end_date).toLocaleDateString()}</span>
            </FlightDetail>
            <FlightDetail>
              <span>Price:</span>
              <span>{flight.price}</span>
            </FlightDetail>
          </FlightDetails>
        </FlightCard>
      ))}
        </FlightsContainer>
        <Footer/>
    </>
  );
};
};