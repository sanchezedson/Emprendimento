interface FloatingMobileBarProps {
  onOpenInterestModal: () => void;
}

export function FloatingMobileBar({ onOpenInterestModal }: FloatingMobileBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-neutral-800 bg-neutral-950/95 px-4 py-2.5 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="truncate">
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-amber-400">
            Vila Ema · Mooca · Tatuapé
          </span>
          <span className="block text-xs font-bold text-white truncate">
            Condições exclusivas de lançamento
          </span>
        </div>
        <button
          onClick={onOpenInterestModal}
          className="shrink-0 rounded-sm bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-950 shadow-md transition-colors hover:bg-amber-400 active:scale-95"
        >
          Tenho Interesse
        </button>
      </div>
    </div>
  );
}
