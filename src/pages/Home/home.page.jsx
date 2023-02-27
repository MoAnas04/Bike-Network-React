import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/search.component";
import Map from "../../components/map/map.component";

const HomePage = () => {
  const [markerArr, setMarker] = useState([]);
  const [filterMarkers, setFilterMarkers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    fetch("http://api.citybik.es/v2/networks")
      .then((response) => response.json())
      .then((data) => {
        setMarker(
          data.networks.map((element) => ({
            latitude: element.location.latitude,
            longitude: element.location.longitude,
            name: element.location.city,
          }))
        );
        setFilterMarkers(markerArr);
      });
  }, []);
  const onChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const onClick = () => {
    setFilterMarkers(markerArr.filter((mark) => mark.name === searchInput));
  };

  console.log(searchInput);
  console.log(markerArr);
  console.log(filterMarkers);
  return (
    <div className="App">
      <SearchBar onChange={onChange} onClick={onClick} />
      <Map markers={filterMarkers.length > 0 ? filterMarkers : markerArr} />
    </div>
  );
};

export default HomePage;
