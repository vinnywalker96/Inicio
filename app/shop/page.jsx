"use client";
import { useState, useEffect } from 'react';
import { products } from '../utils/products';
import Image from 'next/image';
import Link from 'next/link';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedSubtype, setSelectedSubtype] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedSubcategory) {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
    }

    if (selectedSubtype) {
      filtered = filtered.filter(product => product.subtype === selectedSubtype);
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subtype.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSubcategory, selectedSubtype, searchQuery]);

  const categories = [...new Set(products.map(product => product.category))];
  const subcategories = selectedCategory
    ? [...new Set(products.filter(product => product.category === selectedCategory).map(product => product.subcategory))]
    : [];
  const subtypes = selectedSubcategory
    ? [...new Set(products.filter(product => product.subcategory === selectedSubcategory).map(product => product.subtype))]
    : [];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Shop</h1>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedSubcategory('');
            setSelectedSubtype('');
          }}
          className="border rounded p-2"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {selectedCategory && (
          <select
            value={selectedSubcategory}
            onChange={(e) => {
              setSelectedSubcategory(e.target.value);
              setSelectedSubtype('');
            }}
            className="border rounded p-2"
          >
            <option value="">All Subcategories</option>
            {subcategories.map(subcategory => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        )}

        {selectedSubcategory && (
          <select
            value={selectedSubtype}
            onChange={(e) => setSelectedSubtype(e.target.value)}
            className="border rounded p-2"
          >
            <option value="">All Subtypes</option>
            {subtypes.map(subtype => (
              <option key={subtype} value={subtype}>
                {subtype}
              </option>
            ))}
          </select>
        )}

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, category, subcategory, or subtype"
          className="border rounded p-2 flex-1"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded p-4">
            <Link href={`/shop/${product.category}/${product.subcategory}/${product.subtype}/${product.id}`}>
                <Image src={product.image} alt={product.name} width={200} height={200} className="object-cover mb-4" />
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p>{product.category} - {product.subcategory} - {product.subtype}</p>
                <p className="mt-2">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
