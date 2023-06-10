import React, { useState } from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { touristPlaces } from "./list";

function Home() {
  const [filteredList, setFilteredList] = useState(touristPlaces);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const search = (event) => {
    let query = event.target.value;

    let updatedList = touristPlaces.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredList(updatedList);
  };

  const handleImageClick = (place) => {
    setSelectedPlace(place);
  };

  return (
    <>
      <Header   search={search}  />
      <br /><br />
      <div className="place-list" style={{ margin:'20px'}}>
        {filteredList.map((place, index) => {
          return (
            <div className="place-card__header" key={index}>
              <h4 style={{ color:'black'}}>{place.name}</h4>
              <Link
                to={`/items?name=${encodeURIComponent(
                  place.name
                )}&image=${encodeURIComponent(place.image)}&description=${encodeURIComponent(
                  place.description
                )}&location=${encodeURIComponent(place.location)}&rating=${encodeURIComponent(place.rating)}`}
              >
                <br />
                <img
                  width={200}
                  height={150}
                  src={place.image}
                  alt={place.name}
                  onClick={() => handleImageClick(place)}
                />
              </Link>
            </div>
          );
        })}
      </div>
      {selectedPlace && (
        <div className="selected-place__description">
          <h1>{selectedPlace.name}</h1>
          <p>{selectedPlace.description}</p>
          <p>{selectedPlace.rating}</p>
        </div>
      )}
<br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
}

export default Home;
