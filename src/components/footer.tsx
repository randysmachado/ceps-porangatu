import { LearnMore } from "./learn-more";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-x-1 py-10 pt-20 sm:gap-x-3">
      <div className="mb-4">
        <LearnMore
          text="Saiba mais sobre a mudança"
          textLink="aqui"
          link="https://camaraporangatu.go.gov.br/porangatu-tem-novo-cep/"
        />
      </div>
      <div className="flex items-center justify-center gap-x-1 sm:gap-x-3">
        <span className="text-sm text-gray-600 dark:text-neutral-400">
          Mantido e atualizado por:
        </span>
        <span className="text-sm font-bold text-neutral-100">Randys</span>
        <svg
          className="size-5 text-gray-300"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
        </svg>
        <a
          className="inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-none dark:text-blue-500"
          href="https://randys.dev"
        >
          randys.dev
          <svg
            className="size-4 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </footer>
  );
};
