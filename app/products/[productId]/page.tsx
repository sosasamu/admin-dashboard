"use client";

import { useGetProduct } from "./hooks";

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
    </div>
  );
}
