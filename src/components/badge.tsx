type Props = {
  text: string;
};

export const Badge = ({ text }: Props) => {
  return (
    <div className="flex justify-center">
      <p className="inline-flex items-center gap-x-2 rounded-full border border-neutral-600 bg-neutral-800 px-4 py-2 text-neutral-200 focus:border-neutral-600">
        {text}
      </p>
    </div>
  );
};
