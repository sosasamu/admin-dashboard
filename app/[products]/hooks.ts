"use client";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";

export const useGetProducts = (): Product[] | null => {
  const [products, setProducts] = useState<Product[] | null>(null);
  console.log('entra hook');

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8081/api/products");
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      const products: Product[] = await res.json();
      console.log('entra use effect');
      
      setProducts(products);
    })();
  }, []);

  return products;
}
