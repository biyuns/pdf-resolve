import { Icon } from "../ui/app-icon";

const benefits = [
  { icon: "pen", title: "막힘없이 필기하세요", description: "iPad와 Galaxy Tab에서도 자유롭게." },
  { icon: "notebook", title: "쓰던 노트 앱 그대로", description: "즐겨 쓰는 노트 앱으로 가져오세요." },
  { icon: "sparkles", title: "복잡한 과정 없이", description: "PDF를 올리는 것부터 시작하세요." },
] as const;

export function BenefitsSection() {
  return (
    <section id="how-it-works" aria-label="PDF, 다시 소개" className="mx-auto mt-16 grid max-w-4xl gap-8 scroll-mt-8 pb-12 sm:mt-18 sm:grid-cols-3 sm:gap-6 sm:pb-14">
      {benefits.map(({ icon, title, description }, index) => (
        <article key={title} className={`flex items-start gap-3.5 sm:block sm:px-6 ${index > 0 ? "sm:border-l sm:border-line" : ""}`}>
          <div className="mb-3 flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon name={icon} className="size-[18px]" /></div>
          <div><h3 className="text-sm font-bold tracking-tight">{title}</h3><p className="mt-1.5 text-xs leading-6 text-muted">{description}</p></div>
        </article>
      ))}
    </section>
  );
}
