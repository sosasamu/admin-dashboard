"use client";

import { Product } from "@prisma/client";
import { useGetProduct } from "./hooks";

export async function generateStaticParams() {
  const products = await fetch("http://localhost:8081/api/products").then(res => res.json());

  return products.map((prod: Product) => ({
    productId: prod.id,
  }));
}

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  const product = useGetProduct(productId);

  return (
    <div>
      <h1>{product?.name}</h1>
      <h2>{product?.price}</h2>
      <p>{product?.description}</p>
    </div>
  );
}
