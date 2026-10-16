"use client";

import { useRef, useState, type DragEvent } from "react";
import { Icon } from "./ui/app-icon";

const benefits = [
  { icon: "pen", title: "막힘없이 필기하세요", description: "iPad와 Galaxy Tab에서도 자유롭게." },
  { icon: "notebook", title: "쓰던 노트 앱 그대로", description: "즐겨 쓰는 노트 앱으로 가져오세요." },
  { icon: "sparkles", title: "복잡한 과정 없이", description: "PDF를 올리는 것부터 시작하세요." },
] as const;

export default function Home() {
  const input = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  function selectFile(selected?: File) {
    if (!selected) return;
    if (!selected.name.toLowerCase().endsWith(".pdf")) {
      setError("PDF 파일을 선택해 주세요.");
      return;
    }
    setError("");
    setFile(selected);
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);
    selectFile(event.dataTransfer.files[0]);
  }

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a href="/" className="flex items-center gap-2.5" aria-label="PDF, 다시 홈">
          <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-white"><Icon name="document" className="size-5" /></span>
          <span className="text-xl font-extrabold tracking-tight">PDF<span className="text-brand">,</span> 다시</span>
        </a>
        <a href="#how-it-works" className="group flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-brand">
          이용 방법 <Icon name="arrow-up-right" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-10 sm:px-10 sm:pt-14 lg:px-16 lg:pt-16">
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

          <div className="animate-enter relative mx-auto mt-10 max-w-3xl [animation-delay:210ms] sm:mt-12">
            <span className="absolute -top-3 right-6 z-10 rotate-[5deg] rounded-md border border-line bg-white px-3 py-1.5 text-[11px] font-semibold tracking-wide text-muted shadow-sm sm:right-10">LESS LIMITS, MORE IDEAS.</span>
            <div
              onDragOver={(event) => { event.preventDefault(); setDragging(true); }}
              onDragLeave={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDragging(false); }}
              onDrop={onDrop}
              className={`upload-surface rounded-panel border bg-white p-3 transition-colors sm:p-4 ${dragging ? "border-brand" : "border-line"}`}
            >
              <div className={`flex min-h-80 flex-col items-center justify-center rounded-[20px] border-2 border-dashed px-5 py-10 transition-colors sm:min-h-84 ${dragging ? "border-brand bg-brand-soft" : "border-brand/20 bg-upload"}`}>
                <div aria-hidden="true" className="relative mb-6 flex h-20 w-24 items-center justify-center">
                  <div className="absolute left-3 top-1 h-16 w-12 -rotate-[14deg] rounded-lg border border-brand/15 bg-brand-soft" />
                  <div className="relative flex h-[74px] w-[56px] rotate-[6deg] flex-col items-center justify-center gap-1 rounded-lg border border-brand/20 bg-white shadow-[0_5px_12px_#d9483b12]">
                    <Icon name="document" className="size-6 text-brand" /><span className="text-[9px] font-extrabold tracking-wider text-brand">PDF</span>
                  </div>
                  <span className="absolute -right-1 -bottom-1 flex size-8 items-center justify-center rounded-full border-[3px] border-upload bg-brand text-white"><Icon name={file ? "check" : "plus"} className="size-4" /></span>
                </div>
                <h2 className="max-w-full break-all text-lg font-bold tracking-tight sm:text-xl">{file ? file.name : "여기에 PDF를 놓아주세요"}</h2>
                <p aria-live="polite" className="mt-2 text-sm text-muted">{file ? "파일이 선택되었습니다. 실제 변환 기능은 준비 중이에요." : "드래그해서 놓거나, 아래에서 파일을 선택하세요."}</p>
                <input ref={input} type="file" accept=".pdf,application/pdf" className="sr-only" tabIndex={-1} aria-label="PDF 파일 선택" onChange={(event) => selectFile(event.target.files?.[0])} />
                <button type="button" className="button-primary mt-6 flex items-center gap-2.5" onClick={() => input.current?.click()}>
                  <Icon name="upload" className="size-[18px]" /> {file ? "다른 PDF 선택하기" : "PDF 파일 선택하기"} <Icon name="arrow-right" className="ml-3 size-4" />
                </button>
                <p className="mt-4 text-xs text-subtle">PDF 형식 지원 <span className="mx-2 text-line">|</span> UI 미리보기 · 변환 기능 준비 중</p>
                {error && <p role="alert" className="mt-3 text-sm font-medium text-brand">{error}</p>}
              </div>
            </div>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted"><Icon name="shield" className="size-3.5" /> 이 미리보기에서는 파일이 서버로 전송되지 않아요.</p>
          </div>
        </section>

        <section id="how-it-works" aria-label="PDF, 다시 소개" className="mx-auto mt-16 grid max-w-4xl gap-8 scroll-mt-8 pb-12 sm:mt-18 sm:grid-cols-3 sm:gap-6 sm:pb-14">
          {benefits.map(({ icon, title, description }, index) => (
            <article key={title} className={`flex items-start gap-3.5 sm:block sm:px-6 ${index > 0 ? "sm:border-l sm:border-line" : ""}`}>
              <div className="mb-3 flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon name={icon} className="size-[18px]" /></div>
              <div><h3 className="text-sm font-bold tracking-tight">{title}</h3><p className="mt-1.5 text-xs leading-6 text-muted">{description}</p></div>
            </article>
          ))}
        </section>

        <aside className="mx-auto flex max-w-4xl items-start justify-center gap-2 rounded-xl bg-surface px-4 py-3.5 text-xs leading-5 text-muted">
          <Icon name="info" className="mt-0.5 size-3.5 shrink-0" /><p>암호를 찾거나 제거하는 서비스가 아니에요. <span className="sm:whitespace-nowrap">PDF의 필기·편집 및 노트 앱 호환 문제를 해결하기 위해 준비하고 있어요.</span></p>
        </aside>
      </main>

      <footer className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 px-6 pb-7 text-[11px] text-subtle sm:flex-row sm:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} PDF, 다시</p>
        <p className="flex items-center gap-1.5">문서의 가능성을 다시 열다. <span className="text-brand">✳</span></p>
      </footer>
    </div>
  );
}
