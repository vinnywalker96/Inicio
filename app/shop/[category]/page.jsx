"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../utils/products';
import { useParams } from 'next/navigation'; // Use useParams from next/navigation

const CategoryPage = () => {
  const { category } = useParams(); // Extract params using useParams
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredProducts = products.filter(product => product.category === category);
      setCategoryProducts(filteredProducts);
      const uniqueSubcategories = [...new Set(filteredProducts.map(product => product.subcategory))];
      setSubcategories(uniqueSubcategories);
    }
  }, [category]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subcategories.map(subcategory => (
          <Link key={subcategory} href={`/shop/${category}/${subcategory}`} className="border rounded p-4">
            {subcategory}
          </Link>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">All Products in {category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryProducts.map(product => (
          <Link key={product.id} href={`/shop/${category}/${product.subcategory}/${product.subtype}/${product.id}`} className="border rounded p-4">
            <div>
              <Image 
                src={product.image} 
                alt={product.name} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>{product.subcategory} - {product.subtype}</p>
              <p className="mt-2">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
