import React from 'react';
import Product from './components/product/Product';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    productId: 1001,
    productCategory: 'Category 3',
    productName: 'Product 1',
    productImage: 'https://picsum.photos/400?image=768',
    productStock: false,
    productPrice: 20478.708,
    salePrice: 17611.688879999998
  }
];

function App() {
  return (
    <div className='App'>
      {
        products.map((product) => (
          <Product product={product} />
        ))
      }
    </div>
  );
}

export default App;
