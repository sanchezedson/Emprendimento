import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenInterestModal: (presetNeighborhood?: string) => void;
}

export function Header({ onOpenInterestModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display text-xl font-bold tracking-widest text-white transition-opacity hover:opacity-90 sm:text-2xl"
        >
          ALTARE <span className="font-light text-amber-400">RESIDENCIAL</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-300 md:flex">
          <a
            href="#empreendimentos"
            className="transition-colors hover:text-amber-400"
          >
            Empreendimentos
          </a>
          <a
            href="#vila-ema"
            className="transition-colors hover:text-amber-400"
          >
            Vila Ema
          </a>
          <a
            href="#mooca"
            className="transition-colors hover:text-amber-400"
          >
            Mooca
          </a>
          <a
            href="#tatuape"
            className="transition-colors hover:text-amber-400"
          >
            Tatuapé
          </a>
          <a
            href="#diferenciais"
            className="transition-colors hover:text-amber-400"
          >
            Diferenciais
          </a>
          <a
            href="#simulador"
            className="transition-colors hover:text-amber-400"
          >
            Seletor Ideal
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenInterestModal()}
            className="hidden sm:inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 shadow-md shadow-amber-500/20 transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/30 active:scale-[0.98] whitespace-nowrap"
          >
            Tenho Interesse
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex p-2 text-neutral-300 hover:text-white md:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-800 bg-neutral-950 px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-300">
            <a
              href="#empreendimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Empreendimentos
            </a>
            <a
              href="#vila-ema"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Vila Ema
            </a>
            <a
              href="#mooca"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Mooca
            </a>
            <a
              href="#tatuape"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Tatuapé
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Diferenciais
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Seletor Ideal
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInterestModal();
              }}
              className="mt-2 w-full rounded-sm bg-amber-500 py-3 text-center text-xs font-semibold uppercase tracking-wider text-neutral-950 hover:bg-amber-400"
            >
              Tenho Interesse
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
