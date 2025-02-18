// src/components/CardComponent.jsx
import React from 'react';

const CardComponent = () => {
  const data = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is the description for card 1.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is the description for card 2.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is the description for card 3.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'This is the description for card 4.',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  return (
    <div className="container border-2 mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Card List</h1>
      <div className=" border-2 flex flex-wrap gap-6 justify-center">
        {data.map((card) => (
          <div 
            key={card.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-60 border-2"
          >
            <img
              className="w-full h-40 object-cover border-2"
              src={card.image}
              alt={card.title}
            />
            <div className="p-4 border-2">
              <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
