import * as Zod from "zod";

export const schema = Zod.object({
  name: Zod.string().min(2, {
    message: "Nombre debe contener al menos 2 caracteres"
  }).max(255, {
    message: "Nombre no puede ser mayor a 255 caracteres"
  }),
  price: Zod.number().min(0, {
    message: "Precio debe ser mayor a 0"
  }),
  description: Zod.string(),
});

