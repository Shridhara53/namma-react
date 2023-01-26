import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";

/**
       * Header
          - Logo
          - Nav Items (Right side)
          - Cart
          - 
       * Body
          - Search Bar
          - RestarantList
            - RestarantCard
                - Image
                - Name
                - Rating
                - Cusines
       * Footer
          - Links
          - Copyrights
       */



// const RestarantCard = () => {
//   return (
//     <div className="card">
//       <img
//         alt="src"
//         src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/x4uyxvihmg8qa3pddkgf"
//       />
//       <h2>Benne Dose</h2>
//       <h3> Palya </h3>
//       <h4> 4.3 Rating</h4>
//     </div>
//   );
// };

const RestarantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

// const Body = () => {
//   return (
//     <div className="restaurant-list">
//       {restarantList.map((restaurant) => {
//         return <RestarantCard {...restaurant.data} key={restaurant.data.id} />;
//       })}
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
