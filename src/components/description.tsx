type DescriptionProps = {
  text: string;
};

export const Description = ({ text }: DescriptionProps) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-lg text-white/70">{text}</p>
    </div>
  );
};
