import { restarantList } from "../constants";
import RestarantCard from "./RestarantCard";
import { useState } from "react";

// What is State
// What is React Hook : It is normal function,
// What is useState
function filterData(searchText, restarants) {
  return restarants.filter((restarant) => restarant.data.name.includes(searchText));
}

const Body = () => {
  // let searchTxt = "KFC";
  const [searchText, setSearchText] = useState(""); // It is used to Create local state variable.
  // returns: [variable name, function to update the variable];

  // const [searchClicked, setSearchClicked] = useState("false");
  const [restarants, setRestarants] = useState(restarantList);
  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {/* <h1>{searchClicked}</h1> */}
        {/* <button className="search-btn">Search - {searchInput}</button> */}
        <button
          className="search-btn"
          onClick={() => {
            // if(searchClicked === "true") {
            //     setSearchClicked("false");
            // } else {
            //     setSearchClicked("true");
            // }

            const data = filterData(searchText, restarants);
            setRestarants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restarants.map((restaurant) => {
          return (
            <RestarantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
