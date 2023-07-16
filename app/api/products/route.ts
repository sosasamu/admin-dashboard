import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
const list = async (req: Request) => {
  const products = await prisma.product.findMany();
  return NextResponse.json(products, { status: 200 });
};

export { list as GET };
