type TitleProps = {
  initialText: string;
  accentText: string;
  finalText: string;
};

export const Title = ({ initialText, accentText, finalText }: TitleProps) => {
  return (
    <div className="mx-auto mb-8 mt-5 max-w-2xl text-center">
      <h1 className="block text-5xl font-bold text-neutral-200 md:text-6xl lg:text-7xl">
        {initialText}{" "}
        <span className="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent">
          {accentText} <br />
        </span>
        {finalText}
      </h1>
    </div>
  );
};
