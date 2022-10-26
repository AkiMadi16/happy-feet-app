import React from "react";
import BingMapsReact from "bingmaps-react";

function Map() {
  // return <div>Map here</div>
  return (
    <div>
    <BingMapsReact
    bingMapsKey="your bing maps API key goes here"
    height="500px"
    mapOptions={{
      navigationBarMode: "square",
    }}
    width="500px"
    viewOptions={{
      center: { latitude: 42.360081, longitude: -71.058884 },
      mapTypeId: "grayscale",
    }}
  />
  </div>
);
}

export default Map;