import React from 'react';
import{Button}from'@mui/material'
import styles from '../styles/ProductCard.module.css';

function ProductCard({ product,onRemove }) {
  const { id,name, price, inStock } = product;

  return (
    <div
      className={`${styles.card} ${!inStock ? `${styles.outOfStock} outOfStockClass`:''}`}
      data-testid="product-card"
    >
      <>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p className={inStock ? styles.statusInStock : styles.statusOutOfStock}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </p>
        <button variant="outlined"
        color="error"
        size="small"
        onClick={()=>onRemove(id)}>Remove
        </button>
      </>
    </div>
  );
}

export default ProductCard;