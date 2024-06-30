"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '../../../../../utils/products';
import { useParams } from 'next/navigation'; // Import useParams for extracting routing params
import Image from 'next/image';

const ProductPage = () => {
  const { category, subcategory, subtype, product: productId } = useParams(); // Extract routing params using useParams
  const [productData, setProductData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (category && subcategory && subtype && productId) {
      const product = products.find(p => p.id === parseInt(productId));
      if (product) {
        setProductData(product);
      }
    }
  }, [category, subcategory, subtype, productId]);

  // Handle loading state
  if (!productData) {
    return <div>Loading...</div>;
  }
   const handleBuyNow = () => {
    // Handle buy now logic (e.g., redirect to checkout page)
    router.push('/checkout'); // Example redirect to checkout page
  };

  return (
   <div className="card bg-base-100 w-96 shadow-xl mx-auto m-10">
      <div className="relative w-full h-72">
        <Image
          src={productData.image}
          alt={productData.name}
          layout="fill"
          objectFit="cover"
          className="p-2"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{productData.name}</h2>
        <p>{productData.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
