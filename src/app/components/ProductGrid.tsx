import React from 'react';
import { Product, products as allProducts } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products?: Product[];
}

export function ProductGrid({ products = allProducts }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:[grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))] lg:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}