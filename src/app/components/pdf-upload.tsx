"use client";

import { useRef, useState, type DragEvent } from "react";
import { Icon } from "../ui/app-icon";

export function PdfUpload() {
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
  );
}
