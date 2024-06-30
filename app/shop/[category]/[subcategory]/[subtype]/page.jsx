"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { products } from '../../../../utils/products';
import { useParams } from 'next/navigation';

const SubtypePage = () => {
  const { category, subcategory, subtype } = useParams(); // Extract params using useParams
  const [subtypeProducts, setSubtypeProducts] = useState([]);

  useEffect(() => {
    if (category && subcategory && subtype) {
      const filteredProducts = products.filter(product =>
        product.category === category &&
        product.subcategory === subcategory &&
        product.subtype === subtype
      );
      setSubtypeProducts(filteredProducts);
    }
  }, [category, subcategory, subtype]);

  // Handle the case when query parameters are not yet available
  if (!category || !subcategory || !subtype) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{subtype}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subtypeProducts.map(product => (
          <Link key={product.id} href={`/shop/${category}/${subcategory}/${subtype}/${product.id}`} passHref>
            <div className="border rounded p-4 cursor-pointer">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="mt-2">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubtypePage;
