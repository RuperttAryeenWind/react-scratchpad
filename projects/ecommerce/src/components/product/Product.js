import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Product extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <div class="product-card">
      <Card border='light' style={{ width: '18rem', minWidth: 'max-content' }}>
        <Card.Img
          variant='top'
          src={product.productImage}
          style={{ width: '286px', height: '180px' }}
        />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>{product.productPrice}</Card.Text>
          <Button variant='primary'>Add to Cart</Button>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default Product;
