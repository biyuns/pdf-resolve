# PDF, 다시 디자인 시스템

Tailwind CSS v4의 `src/app/globals.css` 내 `@theme`이 디자인 토큰의 원본입니다. 별도 Tailwind 설정 파일 없이 유틸리티로 사용할 수 있습니다.

| 역할 | Tailwind 예시 | 값 |
| --- | --- | --- |
| 전체 배경 | `bg-canvas` | `#fcfaf8` |
| 주요 액션 | `bg-brand`, `text-brand` | `#d94738` |
| 액션 호버 | `hover:bg-brand-hover` | `#bc3428` |
| 브랜드 보조 배경 | `bg-brand-soft` | `#fbece7` |
| 업로드 영역 | `bg-upload` | `#fffcfa` |
| 안내 배경 | `bg-surface` | `#f2efeb` |
| 본문 | `text-ink` | `#302b28` |
| 보조 본문 | `text-muted` | `#79716b` |
| 작은 안내 | `text-subtle` | `#8e857c` |
| 구분선 | `border-line` | `#e9e2db` |

## 공통 규칙

- 시스템 한글 글꼴 사용. 외부 폰트 요청 없음.
- 제목은 굵은 글씨, 좁은 자간과 넉넉한 줄 높이 사용.
- 본문 14–16px, 보조 설명 12px, 푸터 11px.
- 4px 간격 체계 기반으로 Tailwind 기본 spacing 사용.
- 패널 `rounded-panel`, `shadow-panel`. 버튼 12px, 내부 업로드 영역 20px.
- 주요 버튼 `.button-primary`에는 호버·누름 상태 포함.
- 아이콘은 `src/app/ui/app-icon.tsx`의 공통 SVG 컴포넌트 사용.
- 키보드 포커스와 모션 감소 설정 지원.

## 화면과 범위

상단 로고 → 중앙 제목 → 업로드 패널 → 소개 3열 → 안내 → 푸터가 하나의 배경으로 이어집니다. 모바일에서는 소개가 1열로 전환됩니다.

파일 선택 및 드롭 시 파일명만 브라우저에 표시합니다. 서버 업로드, PDF 분석·변환, 암호 제거, 다운로드는 구현하지 않았습니다. PDF 확장자가 아닌 파일에는 안내를 표시합니다.

임시 서비스명은 `src/app/page.tsx`와 `src/app/layout.tsx`에서 변경할 수 있습니다.

## 실행

`npm run dev`로 개발 서버를 실행하고, `npm run build`로 프로덕션 빌드를 수행합니다. 현재 Windows 환경에서 Turbopack의 CSS 처리 프로세스 연결 오류가 재현되어 개발 및 빌드는 Next.js의 Webpack 옵션을 사용합니다.
