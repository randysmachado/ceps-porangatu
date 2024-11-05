import { Cep } from "@/app/types/Cep";

export const Card = (data: { data: Cep[] | null }) => {
  if (!data) return null;

  const { data: ceps } = data;

  return (
    <>
      {ceps !== undefined ? (
        <>
          <h2 className="mt-10 block text-4xl font-bold text-neutral-200">
            Lista de CEP&apos;s por bairros
          </h2>

          <div className="flex flex-wrap justify-center gap-5 pt-10">
            {ceps?.map((cep) => (
              <div
                key={cep.cep}
                className="flex w-96 flex-col gap-2 rounded-lg border border-neutral-700 p-4 text-xl text-neutral-400"
              >
                <p>
                  <span className="font-semibold text-neutral-200">
                    Logradouro:
                  </span>{" "}
                  {cep.logradouro}
                </p>
                <p>
                  <span className="font-semibold text-neutral-200">
                    Bairro:
                  </span>{" "}
                  {cep.bairro}
                </p>
                <p>
                  <span className="font-semibold text-neutral-200">
                    Seu novo CEP é:
                  </span>{" "}
                  <span className="text-blue-500">{cep.cep}</span>
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
