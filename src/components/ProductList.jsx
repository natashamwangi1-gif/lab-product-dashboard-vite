import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products,onRemove }) {
  // Handle empty list or when no products match the filter
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  // Check if at least one product is in stock
  const hasInStock = products.some((product) => product.inStock);

  return (
    <div>
      {!hasInStock && <p>No products are currently in stock.</p>}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove}/>
      ))}
    </div>
  );
}

export default ProductList;