import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PortfolioPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <div className="mx-auto flex w-full max-w-[480px] flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center gap-sm border-b border-hairline bg-canvas px-md py-sm">
          <button
            onClick={() => navigate(-1)}
            className="rounded-sm p-xs text-muted transition-colors hover:text-foreground"
            aria-label="뒤로 가기"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="text-[14px] font-bold text-foreground">내 포트폴리오</span>
        </header>

        <main className="flex flex-1 items-center justify-center px-md py-xxl text-center">
          <div>
            <p className="text-[14px] font-bold text-foreground">S003 — 내 포트폴리오 입력</p>
            <p className="mt-xs text-[12px] font-medium text-muted">
              다음 목업 스프린트에서 구현 예정
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
