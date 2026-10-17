import { Icon } from "../ui/app-icon";

export function Header() {
  return (
    <header className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
      <a href="/" className="flex items-center gap-2.5" aria-label="PDF, 다시 홈">
        <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-white"><Icon name="document" className="size-5" /></span>
        <span className="text-xl font-extrabold tracking-tight">PDF<span className="text-brand">,</span> 다시</span>
      </a>
      <a href="#how-it-works" className="group flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-brand">
        이용 방법 <Icon name="arrow-up-right" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </header>
  );
}
