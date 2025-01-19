import React from 'react';
import './Products.css';

function Products() {
  const products = [
    { id: 1, name: 'Brush Cutter', image: '/images/Brush Cutter.jpg' },
    { id: 2, name: 'Chaff Cutter', image: '/images/Chaff Cutter.jpg' },
    { id: 3, name: 'Bailer', image: '/images/Bailer.jpg' },
    { id: 4, name: 'Power Spray Pump', image: '/images/Power Spray Pump.jpg' },
    { id: 5, name: 'Battery Spray Pump', image: '/images/Battery Spray Pump.jpg' },
    { id: 6, name: 'Portable Sprayer', image: '/images/Portable Sprayer.jpg' },
    { id: 7, name: 'Pulverizer Machine', image: '/images/Pulverizer Machine.jpg' },
    { id: 8, name: 'Flour Miller', image: '/images/Flour Miller.jpg' },
    { id: 9, name: 'Rotavator', image: '/images/Rotavator.jpg' },
    { id: 10, name: 'Cultivator', image: '/images/Cultivator.jpg' },
    { id: 11, name: 'Paddy Thresher', image: '/images/Paddy Thresher.jpg' },
    { id: 12, name: 'Seed-cum-Fertilizer Drill Machine', image: '/images/Seed-cum-Fertilizer Drill Machine.jpg' },
    { id: 13, name: 'Turmeric Boilers', image: '/images/Turmeric Boilers.jpg' },
    { id: 14, name: '7HP Weeder', image: '/images/7HP Weeder.jpg' },
    { id: 15, name: 'Makka Thresher Machine', image: '/images/Makka Thresher Machine.jpg' },
    { id: 16, name: 'Plough(Three-blade model)', image: '/images/Plough(Three-blade model).jpg' },

  ];

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
