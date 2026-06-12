import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Settings, ChevronRight, AlertCircle, RefreshCw } from 'lucide-react'

type ImpactLevel = 'danger' | 'neutral' | 'safe'
type TimeSlot = 'morning' | 'midday' | 'preclose'
type DemoState = 'default' | 'loading' | 'error' | 'no-portfolio'

interface BriefingData {
  impactLevel: ImpactLevel
  impactLabel: string
  summary: string
  watchItems: string[]
  updatedAt: string
}

const TABS: { id: TimeSlot; label: string }[] = [
  { id: 'morning', label: '아침' },
  { id: 'midday', label: '장중' },
  { id: 'preclose', label: '마감 전' },
]

const BRIEFING: Record<TimeSlot, BriefingData> = {
  morning: {
    impactLevel: 'danger',
    impactLabel: '위험',
    summary: '금리 상승 + 반도체 약세 + 환율 부담이 겹쳤습니다.',
    watchItems: ['반도체 선물 흐름', '원/달러 환율', '외국인 수급'],
    updatedAt: '08:42',
  },
  midday: {
    impactLevel: 'neutral',
    impactLabel: '중립',
    summary: '오전 하락폭이 일부 회복됐으나 불확실성이 유지됩니다.',
    watchItems: ['반도체 반등 지속 여부', '외국인 수급 전환', '코스피 200 지지선'],
    updatedAt: '12:15',
  },
  preclose: {
    impactLevel: 'safe',
    impactLabel: '우호',
    summary: '환율 안정과 반도체 수급 개선으로 내일 갭상승 가능성이 있습니다.',
    watchItems: ['미국 선물 흐름', '야간 달러 인덱스', 'CPI 발표 일정'],
    updatedAt: '14:50',
  },
}

const DEMO_OPTIONS: { id: DemoState; label: string }[] = [
  { id: 'default', label: '기본' },
  { id: 'loading', label: '로딩' },
  { id: 'error', label: '오류' },
  { id: 'no-portfolio', label: '포폴 없음' },
]

function impactCardClass(level: ImpactLevel): string {
  switch (level) {
    case 'danger':
      return 'border-error bg-canvas'
    case 'neutral':
      return 'border-hairline bg-surface-neutral'
    case 'safe':
      return 'border-primary bg-mint-tint'
  }
}

function impactTextClass(level: ImpactLevel): string {
  switch (level) {
    case 'danger':
      return 'text-error'
    case 'neutral':
      return 'text-muted'
    case 'safe':
      return 'text-primary'
  }
}

function SkeletonLine({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-sm bg-surface-neutral ${className ?? ''}`} />
  )
}

function BriefingSkeleton() {
  return (
    <div className="space-y-lg px-md">
      <div className="flex items-center justify-between">
        <SkeletonLine className="h-4 w-28" />
        <SkeletonLine className="h-4 w-16" />
      </div>
      <SkeletonLine className="h-[88px] w-full" />
      <div className="space-y-sm">
        <SkeletonLine className="h-4 w-full" />
        <SkeletonLine className="h-4 w-3/4" />
      </div>
      <div className="space-y-xs">
        <SkeletonLine className="h-4 w-20" />
        <div className="space-y-sm pt-xs">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-sm">
              <SkeletonLine className="h-5 w-5 rounded-full" />
              <SkeletonLine className="h-4 flex-1" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-sm">
        <SkeletonLine className="h-[42px] flex-1" />
        <SkeletonLine className="h-[42px] flex-1" />
      </div>
    </div>
  )
}

function BriefingError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="mx-md rounded-sm border border-hairline border-l-2 border-l-error bg-canvas p-md shadow-standard">
      <div className="flex items-start gap-sm">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-error" />
        <div className="flex-1">
          <p className="text-[14px] font-bold leading-snug text-foreground">
            데이터를 불러오지 못했습니다.
          </p>
          <p className="mt-xs text-[13px] font-medium text-muted">
            잠시 후 다시 확인해 주세요.
          </p>
          <button
            onClick={onRetry}
            className="mt-sm flex items-center gap-xs rounded-sm border border-primary px-md py-xs text-[14px] font-bold text-primary transition-colors hover:bg-mint-tint"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            다시 확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default function BriefingPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<TimeSlot>('morning')
  const [demoState, setDemoState] = useState<DemoState>('default')

  const briefing = BRIEFING[activeTab]
  const hasPortfolio = demoState !== 'no-portfolio'

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      {/* Mobile-first container, centered on desktop */}
      <div className="mx-auto flex w-full max-w-[480px] flex-1 flex-col">

        {/* Sticky header */}
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-hairline bg-canvas px-md py-sm">
          <span className="text-[18px] font-bold tracking-tight text-foreground">
            마켓가드
          </span>
          <button
            onClick={() => navigate('/portfolio')}
            className="rounded-sm p-xs text-muted transition-colors hover:text-primary"
            aria-label="포트폴리오 설정"
          >
            <Settings className="h-5 w-5" />
          </button>
        </header>

        {/* Time-slot tab bar */}
        <div className="flex border-b border-hairline">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={[
                'flex-1 py-sm text-[14px] font-bold transition-colors',
                activeTab === tab.id
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted hover:text-body',
              ].join(' ')}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main content */}
        <main className="flex-1 py-lg pb-[72px]">
          {demoState === 'loading' ? (
            <BriefingSkeleton />
          ) : demoState === 'error' ? (
            <BriefingError onRetry={() => setDemoState('default')} />
          ) : (
            <div className="space-y-lg px-md">

              {/* Impact section */}
              <div>
                <div className="mb-sm flex items-baseline justify-between">
                  <span className="text-[14px] font-bold text-foreground">
                    오늘 한국장 영향도
                  </span>
                  <span className="text-[12px] font-medium text-muted">
                    {briefing.updatedAt} 기준
                  </span>
                </div>
                <button
                  onClick={() => navigate('/evidence')}
                  className={[
                    'w-full rounded-sm border py-lg text-center shadow-standard transition-opacity hover:opacity-80',
                    impactCardClass(briefing.impactLevel),
                  ].join(' ')}
                >
                  <span
                    className={[
                      'text-[36px] font-bold leading-none tracking-tight',
                      impactTextClass(briefing.impactLevel),
                    ].join(' ')}
                  >
                    {briefing.impactLabel}
                  </span>
                </button>
              </div>

              {/* Summary */}
              <p className="text-[14px] font-medium leading-relaxed text-body">
                {briefing.summary}
              </p>

              {/* Watch list */}
              <div>
                <p className="mb-sm text-[14px] font-bold text-foreground">지금 볼 것</p>
                <ol className="space-y-sm">
                  {briefing.watchItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-sm text-[14px] font-medium text-body">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-neutral text-[11px] font-bold text-muted">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Portfolio hint — no-portfolio state only */}
              {!hasPortfolio && (
                <p className="text-[12px] font-medium text-muted">
                  보유 종목을 추가하면 오늘 민감한 섹터를 함께 확인할 수 있습니다.
                </p>
              )}

              {/* CTA row */}
              <div className="flex gap-sm">
                {/* Ghost button */}
                <button
                  onClick={() => navigate('/evidence')}
                  className="flex flex-1 items-center justify-center gap-xs rounded-sm border border-primary px-md py-[11px] text-[14px] font-bold text-primary transition-colors hover:bg-mint-tint"
                >
                  근거 보기
                  <ChevronRight className="h-4 w-4" />
                </button>
                {/* Primary button */}
                <button
                  onClick={() => navigate('/portfolio')}
                  className="flex flex-1 items-center justify-center rounded-sm bg-primary px-md py-[11px] text-[14px] font-bold text-on-primary transition-colors hover:bg-primary-hover"
                >
                  {hasPortfolio ? '내 포트 점검' : '포트폴리오 추가'}
                </button>
              </div>

            </div>
          )}
        </main>
      </div>

      {/* Demo controls — prototype only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-hairline bg-surface-alt/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[480px] items-center gap-xs overflow-x-auto px-md py-xs">
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-muted">
            데모
          </span>
          <div className="flex gap-xs">
            {DEMO_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setDemoState(opt.id)}
                className={[
                  'shrink-0 rounded-full px-sm py-xs text-[11px] font-bold transition-colors',
                  demoState === opt.id
                    ? 'bg-foreground text-canvas'
                    : 'text-muted hover:text-foreground',
                ].join(' ')}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="ml-auto flex shrink-0 gap-xs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setDemoState('default')
                }}
                className={[
                  'rounded-full px-sm py-xs text-[11px] font-bold transition-colors',
                  activeTab === tab.id && demoState === 'default'
                    ? 'bg-foreground text-canvas'
                    : 'text-muted hover:text-foreground',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
