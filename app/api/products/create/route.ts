import { PrismaClient, Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
const create = async (req: Request) => {
  const { name, price, description, image } = await req.json();

  if (!name || !price) return NextResponse.json({ error: "Missing name or price" }, { status: 400 });

  let product: Prisma.ProductCreateInput;
  product = {
    name,
    price,
    description,
    image
  }

  const createProduct = await prisma.product.create({ data: product });

  return NextResponse.json({ createProduct }, { status: 200 });
};

export { create as POST };
