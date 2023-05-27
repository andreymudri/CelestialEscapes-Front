import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../App.jsx";
import { FlightCard, FlightDetails, FlightTitle, FlightsContainer,FlightDetail } from "./styles/styles.jsx";

export default function Flights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/flights`)
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (flights.rows.length < 1) {
    return (
      <div>
        loading
      </div>
    )
  }
    if (flights.rows.length >= 1) {
    console.log(flights)
  return (
    <FlightsContainer>
      {flights.rows.map(flight => (
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
  );
};
};