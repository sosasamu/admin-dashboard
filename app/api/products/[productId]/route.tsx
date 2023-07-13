import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

interface ShowProductParams {
  params: {
    productId: string;
  };
}

const prisma = new PrismaClient();
const show = async (request: NextApiRequest, { params }: ShowProductParams) => {
  const { productId } = params;
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });
  return NextResponse.json(product, { status: 200 });
};

export { show as GET };
