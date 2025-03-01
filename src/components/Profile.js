import React from "react";

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <div className="bg-white shadow-lg rounded-xl p-4 text-center w-1/4 m-2 transform transition duration-300 hover:scale-105 hover:shadow-2xl m-5">
        {/* <img src={pet.image} alt={pet.type} className="w-full h-40 object-cover rounded-md" /> */}
        <h2 className="text-xl font-bold mt-2 text-gray-800">Mandar Kelkar</h2>
        <p className="text-gray-600">Address : Swminarayan mandir</p>
        <p className="text-gray-600">Weight: </p>
        <button className="mt-3 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary transition">
          Edit
        </button>
      </div>
    </div>
  );
}


