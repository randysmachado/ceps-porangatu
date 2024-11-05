"use server";

import { Cep } from "../types/Cep";

export async function getCep(state: {}, formData: FormData) {
  const street = formData.get("street") as string;

  function clearString(text: string) {
    while (text.indexOf("  ") != -1) text = text.replace("  ", " ");
    return text;
  }

  const clearStreet = clearString(street);

  try {
    if (!clearStreet) throw new Error("Informe o nome da rua");

    if (clearStreet.length <= 4)
      throw new Error("O nome da rua deve ter 4 ou mais caracteres");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${clearStreet}/json/`,
    );

    if (!response.ok) throw new Error("Rua não encontrada");

    const data: Cep[] = await response.json();

    if (!data[0].logradouro) throw new Error("Rua não encontrada");

    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        ok: false,
        error: error.message,
        data: null,
      };
    } else {
      return { ok: false, error: "Erro", data: null };
    }
  }
}
