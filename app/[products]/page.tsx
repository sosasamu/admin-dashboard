"use client";

import { useGetProducts } from "./hooks";

export default function ProductList() {
  const products = useGetProducts();

  return <div>{products?.map(prod => <h1 key={prod.id}>{prod.name}</h1>)}</div>
}
