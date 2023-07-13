"use client";

import Link from "next/link";
import { useGetProducts } from "./hooks";

export default function ProductList() {
  const products = useGetProducts();

  return (
    <div>
      {products?.map((prod) => (
        <Link href={`/products/${prod.id}`} key={prod.id}>
          {prod.name}
        </Link>
      ))}
    </div>
  );
}
