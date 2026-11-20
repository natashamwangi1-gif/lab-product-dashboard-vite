import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ProductList from './components/ProductList';

const initialProducts = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Phone', price: 699, inStock: false },
  { id: 3, name: 'Tablet', price: 199, inStock: true },
  { id: 4, name: 'Monitor', price: 299, inStock: false },
];

function App() {
  const [products,setProducts ]= useState(initialProducts);
  const [filter, setFilter] = useState('all'); 

const handleRemoveProducts=(id)=>{
  setProducts((prevProducts)=>
  prevProducts.filter((product)=>product.id!==id))
  }


  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true;
  });

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Product Dashboard
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Button
          variant={filter === 'all' ? 'contained' : 'outlined'}
          onClick={() => setFilter('all')}
        >
          All Products
        </Button>
        <Button
          variant={filter === 'inStock' ? 'contained' : 'outlined'}
          onClick={() => setFilter('inStock')}
        >
          In Stock
        </Button>
        <Button
          variant={filter === 'outOfStock' ? 'contained' : 'outlined'}
          onClick={() => setFilter('outOfStock')}
        >
          Out of Stock
        </Button>
      </Box>

      <ProductList products={filteredProducts}
      onRemove={handleRemoveProducts} />
    </Container>
  );
}

export default App;