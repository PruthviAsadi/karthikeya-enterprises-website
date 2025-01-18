import React from 'react';
import './Products.css';

function Products() {
  const products = [
    { id: 1, name: 'Brush Cutter', image: '/images/1.jpg' },
    { id: 2, name: 'Chaff Cutter', image: '/images/2.jpg' },
    { id: 3, name: 'Bailer', image: '/images/3.jpg' },
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
