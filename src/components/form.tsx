"use client";

import { useFormState, useFormStatus } from "react-dom";

import { getCep } from "@/app/actions/get-cep";
import { Card } from "./card";

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium uppercase text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
        disabled={pending}
      >
        Pesquisar
      </button>
    </>
  );
};

export const Form = () => {
  const [state, formAction] = useFormState(getCep, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <div className="text-center">
      <form action={formAction}>
        <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3 lg:mt-8">
          <div className="w-full sm:w-auto">
            <label htmlFor="street" className="sr-only">
              Nome da sua rua
            </label>
            <input
              type="text"
              id="street"
              name="street"
              className="block w-full min-w-80 rounded-md border-2 border-gray-600 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
              placeholder="Digite o nome da sua rua"
            />
          </div>
          <Button />
        </div>

        {state.error ? (
          <div
            className="mx-auto mt-8 max-w-max rounded-lg border border-red-200 bg-red-100 p-4 text-base text-red-800 dark:border-red-900 dark:bg-red-800/10 dark:text-red-500"
            role="alert"
            aria-labelledby="hs-soft-color-danger-label"
          >
            <span id="hs-soft-color-danger-label" className="font-bold">
              Erro:
            </span>{" "}
            {state.error}
          </div>
        ) : (
          ""
        )}
      </form>

      <Card data={state.data} />
    </div>
  );
};
