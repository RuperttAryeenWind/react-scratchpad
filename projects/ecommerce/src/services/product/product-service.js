import Axios from 'axios';

function getProducts() {
  return Axios.get(
    'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json'
  );
}

const ProductService = { getProducts };

export default ProductService;
