import React from "react";

const petData = require("../Assets/petData.json");

const PetCard = ({ pet }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 text-center w-1/4 m-2 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="w-full h-40 overflow-hidden">
        <img 
          src={pet.image} 
          alt={pet.type} 
          className="w-full h-full object-cover rounded-md transition-transform duration-1500 hover:scale-90 hover:object-contain"
        />
      </div>
      <h2 className="text-xl font-bold mt-2 text-gray-800">{pet.type}</h2>
      <p className="text-gray-600">Color: {pet.color}</p>
      <p className="text-gray-600">Weight: {pet.weight} kg</p>
      <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
        Adopt
      </button>
    </div>
  );
};

const PetGallery = () => {
  const rows = petData.reduce((acc, pet, index) => {
    if (index % 4 === 0) acc.push([]);
    acc[acc.length - 1].push(pet);
    return acc;
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Adopt a Pet</h1>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-between">
          {row.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PetGallery;



