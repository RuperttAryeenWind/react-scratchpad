import React from 'react';
import Product from '../../components/product/Product';
import ProductService from '../../services/product/product-service';

class ProductList extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    ProductService.getProducts()
      .then((res) => {
        console.log('Successfully fetched product data', res);
        this.setState({ products: res.data });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.products.map((product) => (
          <Product product={product} />
        ))}
      </React.Fragment>
    );
  }
}

export default ProductList;
