import { Product } from "@prisma/client";
import { useEffect, useState } from "react";

export const useGetProduct = (productId: string): Product | undefined => {
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `http://localhost:8081/api/products/${productId}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const product: Product = await res.json();

      setProduct(product);
    })();
  }, [productId]);

  return product;
};
