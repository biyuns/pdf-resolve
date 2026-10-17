import { PdfUpload } from "./pdf-upload";

export function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="text-center">
      <div className="animate-enter inline-flex items-center gap-2 rounded-full border border-brand/10 bg-brand-soft px-3.5 py-1.5 text-xs font-bold text-brand">
        <span className="size-1.5 rounded-full bg-brand" /> PDF의 다음 페이지는, 자유롭게
      </div>
      <h1 id="hero-title" className="animate-enter mt-6 text-[clamp(2.25rem,5.2vw,4rem)] leading-[1.25] font-extrabold tracking-[-0.065em] [animation-delay:70ms]">
        읽기만 하던 PDF에,<br />
        <span className="relative inline-block text-brand">당신의 생각을 더하세요.<svg viewBox="0 0 500 15" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-brand/20" aria-hidden="true"><path d="M3 10Q220-3 497 7" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /></svg></span>
      </h1>
      <p className="animate-enter mt-7 text-sm leading-7 text-muted [animation-delay:140ms] sm:text-base">
        필기가 안 되거나, 노트 앱에 가져올 수 없는 PDF.<br className="sm:hidden" /> 다시 쓰기 좋은 문서로 준비하세요.
      </p>

      <PdfUpload />
    </section>
  );
}
