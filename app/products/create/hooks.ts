import * as Zod from "zod";
import { schema } from "./helpers";

interface ProductData {
    name: string;
    price: number;
    description: string | undefined;
}

export const useCreateProduct = async (data: Zod.infer<typeof schema>) => {
    try {
      const res = await fetch('/api/products/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const newItem = await res.json();
    } catch (error) {
      console.log('error', error);
    }
  }

