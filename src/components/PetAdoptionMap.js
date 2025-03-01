import React from "react";

const Sheltermap = () => {
  const findShelters = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // ✅ Corrected Google Maps URL using template literals
          const googleMapsUrl = `https://www.google.com/maps/search/nearby+pet+shelters/@${lat},${lng},14z`;

          // Redirect to Google Maps
          window.location.href = googleMapsUrl;
        },
        () => {
          alert("Location access denied! Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="mt-4 text-center">
      <h1 className="text-xl font-bold">Find a Pet Shelter Near You</h1>
      <button 
        onClick={findShelters} 
        className="m-5 mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
      >
        📍 Find Nearby Pet Shelters
      </button>
    </div>
  );
};

export default Sheltermap;