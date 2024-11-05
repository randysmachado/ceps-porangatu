type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <main>
      <div className="mx-auto max-w-[85rem] px-4 font-[family-name:var(--font-geist-sans)]">
        {children}
      </div>
    </main>
  );
};
