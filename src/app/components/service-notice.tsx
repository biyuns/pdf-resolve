import { Icon } from "../ui/app-icon";

export function ServiceNotice() {
  return (
    <aside className="mx-auto flex max-w-4xl items-start justify-center gap-2 rounded-xl bg-surface px-4 py-3.5 text-xs leading-5 text-muted">
      <Icon name="info" className="mt-0.5 size-3.5 shrink-0" /><p>암호를 찾거나 제거하는 서비스가 아니에요. <span className="sm:whitespace-nowrap">PDF의 필기·편집 및 노트 앱 호환 문제를 해결하기 위해 준비하고 있어요.</span></p>
    </aside>
  );
}
