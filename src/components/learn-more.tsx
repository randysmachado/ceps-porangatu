type LearnMoreProps = {
  text: string;
  link?: string;
  textLink?: string;
};

export const LearnMore = ({ text, link, textLink }: LearnMoreProps) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-lg text-white/70">
        {text}{" "}
        {link ? (
          <a
            className="inline-flex items-center gap-x-1 font-medium text-blue-500 decoration-2 hover:underline focus:underline focus:outline-none"
            target="_blank"
            rel="noopener noreferer"
            href={link}
          >
            {textLink}

            <svg
              className="size-4 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#3b82f6"
              viewBox="0 0 256 256"
            >
              <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
            </svg>
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};
