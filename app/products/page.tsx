"use client";

import Link from "next/link";
import { useGetProducts } from "./hooks";

export default function ProductList() {
  const products = useGetProducts();

  return (
    <div>
      <ul>
        {products?.map((prod) => (
          <li key={prod.id}>
            <h2>
              <Link href={`/products/${prod.id}`}>
                {prod.name}
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
