import React, { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ProductCard from '../components/ProductCard';
import Skeleton from '../components/ProductCard/Skeleton';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch('https://63bfc99d0cc56e5fb0df058c.mockapi.io/items');
      const items = await response.json();
      setProducts(items);
      setIsLoading(false);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : products.map((product) => <ProductCard {...product} key={product.id} />)}
      </div>
    </>
  );
};
