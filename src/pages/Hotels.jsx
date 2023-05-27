import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../App.jsx";
import { HotelCard, HotelDetails, HotelTitle, HotelsContainer, HotelImage, HotelDescription } from "./styles/styles.jsx";

export default function Hotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
      axios
        .get(`${apiUrl}/hotels`)
      .then((response) => {
        setHotels(response.data.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (hotels.length < 1) {
    return (
      <div>
        loading
      </div>
    )
  }
    if(hotels.length >= 1){
  return (
    <HotelsContainer>
      {hotels.map(hotel => (
        <HotelCard key={hotel.id}>
          <HotelImage src="https://i.redd.it/51v7tv7kl6h61.jpg" alt="{PLACEHOLDER}" />
          <HotelDetails>
            <HotelTitle>{hotel.name}</HotelTitle>
            <HotelDescription>{hotel.description}</HotelDescription>
            <div>
              <span>City:</span>
              <span>{hotel.city}</span>
            </div>
          </HotelDetails>
        </HotelCard>
      ))}
    </HotelsContainer>
  );
};
}