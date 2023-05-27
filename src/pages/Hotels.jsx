import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../App.jsx";
import { HotelCard, HotelDetails, HotelTitle, HotelsContainer, HotelImage, HotelDescription } from "./styles/styles.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Hotels() {
  const { id } = useParams();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function fetchHotels(url){
    try {
      const response = await axios.get(url);
      setHotels(response.data.rows);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = id ? `${apiUrl}/hotels/${id}` : `${apiUrl}/hotels`;
    fetchHotels(url);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <HotelsContainer>
      <Header />
      {id ? (
        <>
          <HotelTitle>
            {hotels[0].name} in {hotels[0].city}
          </HotelTitle>
          <div></div>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id}>
              <HotelImage src="https://i.redd.it/51v7tv7kl6h61.jpg" alt="Hotel thumbnail" />
              <HotelDetails>
                <HotelTitle>{hotel.room_type}</HotelTitle>
                <HotelDescription>{hotel.description}</HotelDescription>
                <div>
                  <span>City:</span>
                  <span> {hotel.city}</span>
                </div>
                <div>
                  <span>Capacity:</span>
                  <span> {hotel.capacity}</span>
                </div>
                <div>
                  <span>Price per night:</span>
                  <span> {hotel.price_per_night}</span>
                </div>
              </HotelDetails>
            </HotelCard>
          ))}
        </>
      ) : (
        hotels.map((hotel) => (
          <HotelCard key={hotel.id} onClick={() => navigate(`/hotels/${hotel.id}`)}>
            <HotelImage src="https://i.redd.it/51v7tv7kl6h61.jpg" alt="Hotel thumbnail" />
            <HotelDetails>
              <HotelTitle>{hotel.name}</HotelTitle>
              <HotelDescription>{hotel.description}</HotelDescription>
              <div>
                <span>City:</span>
                <span>{hotel.city}</span>
              </div>
            </HotelDetails>
          </HotelCard>
        ))
      )}
      <Footer />
    </HotelsContainer>
  );
}
