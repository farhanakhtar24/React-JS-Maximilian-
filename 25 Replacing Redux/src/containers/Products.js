import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { productsContext } from '../context/products-context';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  const productList = useContext(productsContext).products;
  // const productList = useSelector(state => state.shop.products);
  return (
    <ul className="products-list">
      { productList.map(prod => (
        <ProductItem
          key={ prod.id }
          id={ prod.id }
          title={ prod.title }
          description={ prod.description }
          isFav={ prod.isFavorite }
        />
      )) }
    </ul>
  );
};

export default Products;
