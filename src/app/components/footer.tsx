export function Footer() {
  return (
    <footer className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 px-6 pb-7 text-[11px] text-subtle sm:flex-row sm:px-10 lg:px-16">
      <p>© {new Date().getFullYear()} PDF, 다시</p>
      <p className="flex items-center gap-1.5">문서의 가능성을 다시 열다. <span className="text-brand">✳</span></p>
    </footer>
  );
}
